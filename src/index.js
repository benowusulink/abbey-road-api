const path = require('path');

const express = require('express');
const app = express();
const cors = require('cors');

const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');

const sqlite = require("./database/knex/knex.js").sqlite_db;
const nodemailer = require("./utilities/nodemailer/nodemailer.js").transporter;


app.use(express.static(path.join(__dirname, '../public')));

app.use(cookieParser());
app.use(cors())
app.use(express.json());

app.get("/api/services_page/fetch_anchor_tags",(req,res)=>{

	sqlite('services_page_table')
	.where({
		element: 'anchor_tag'
	})
	.select('*')
	.then((data)=>{
		console.log(data)
		res.json({
			success: true,
			elements:data
		})
	})
	.catch((err)=>{
		console.log(err)
		res.json({
			success: false
		})
	})

})

app.get("/api/governance_page/fetch_anchor_tags", (req,res)=>{

	sqlite('governance_page_table')
	.where({
		element: 'anchor_tag'
	})
	.select('*')
	.then((data)=>{
		console.log(data)
		res.json({
			success: true,
			elements:data
		})
	})
	.catch((err)=>{
		console.log(err)
		res.json({
			success: false
		})
	})
})


app.get("/api/estates-page/fetch_page_elements", (req,res)=>{

	// transaction to get all values from estate_page_images & estate_page_elements
	// tables
	sqlite.transaction((trx) => {

	  const result = {};

	  return trx('estate_page_images')
	    .select('*')
	    .from('estate_page_images')
	    .then((data1) => {

	    	if(data1.length > 0){
	    		result.estate_page_images = data1;
	    	}
	    	else{
	    		result.estate_page_images = null
	    	}

	      return trx('estate_page_elements')
	        .select('*')
	        .from('estate_page_elements')
	    })
	    .then((data2) => {

	    	if(data2.length > 0){
	    		result.estate_page_elements = data2;
	    	}
	    	else{
	    		result.estate_page_elements = null
	    	}

	      return result; 
	    });

	})
	.then((result) => {

	// check if result exisits,is an object & had two array properties
	  if (result &&
	    typeof result === 'object' &&
	    Array.isArray(result.estate_page_images) &&
	    Array.isArray(result.estate_page_elements)){

	    res.status(200).json({
	      success: true,
	      estate_page: result
	    });
	  } 
	  else {

	    res.status(404).json({
	      success: true,
	      estate_page: null
	    });
	  }
	})
	.catch((err) => {

	  console.error(err);

	  	res.status(404).json({
	      success: false
	    });
	})
})

app.get("/api/index-page/fetch_page_elements", (req,res)=>{

	sqlite.select('*')
	.from('index_page_elements_table')
	.then((elements)=>{

		 if(elements.length > 0 &&
			Array.isArray(elements) &&
      	 	typeof elements[0] === 'object' &&
      		elements[0] !== null){

			// loop through elements from table and categorising them into 
			// seperate arrays 
			const a_tag_elements = elements.filter((a_tag_element)=>{
				if(a_tag_element.section === 'a_tag_elements'){
					return a_tag_element
				}
			})

			const estate_element_text = elements.filter((estate_element)=>{
				if(estate_element.section === 'estate_elements' &&
					estate_element.id === "index-section3-article1-div1-h3-p1"){
					return estate_element
				}
		    }).map((estate_element)=>{
				return estate_element.text
			})

		    const estate_elements_images = elements.filter((estate_element)=>{
		    	if(estate_element.section === 'estate_elements' &&
		    		estate_element.id !== "index-section3-article1-div1-h3-p1"){
		    			return estate_element
		    	}
		    })

			const service_images = elements.filter((service_image)=>{
				if(service_image.section === "service_images"){
					return service_image
				}
			})


			// server response
			res.status(200).json({
				success: true,
				a_tag_elements: a_tag_elements,
				estate_text: estate_element_text[0],
				estate_images: estate_elements_images,
				service_images: service_images
			})
		}
		else{
			console.log("couldnt find elements from index_page_elements_table")
			res.status(404).json({
				success: false
			})
		}

	})
	.catch((err)=>{
		console.log(err);
		res.status(404).json({
			success: false
		})
	})

})


app.get("/api/index-page/events_and_news",(req,res)=>{

	sqlite.transaction((trx) => {

	  const result = {};

	  return trx('events_table')
	    .select('*')
	    .then((data1) => {
	      result.events_table = data1;
	      return trx('news_table')
	        .select('*')
	    })
	    .then((data2) => {
	      result.news_table = data2;
	      return result; // return the collected object
	    });

	})
	.then((result) => {

	  if(result.events_table.length > 0){

	  	  const top3_events = 
		  result.events_table.sort((a, b) => {
		    const [dayA, monthA, yearA] = a.event_date.split("-");
		    const [dayB, monthB, yearB] = b.event_date.split("-");

		    const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
		    const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

		    return dateB - dateA; // latest first
		  })
		  .slice(0, 3); // get first 3 items

		  result.events_table = top3_events
	  }

	  console.log(result)

	  if(result.news_table.length > 0){

	  	  const top3_news = 
		  result.news_table.sort((a, b) => {
		    const [dayA, monthA, yearA] = a.news_date.split("-");
		    const [dayB, monthB, yearB] = b.news_date.split("-");

		    const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
		    const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

		    return dateB - dateA; // latest first
		  })
		  .slice(0, 3); // get first 3 items

		  result.news_table = top3_news
	  }

	  console.log(result)

	  res.status(200).json({
	  	status: true,
	  	data: result
	  })
	  
	})
	.catch((err) => {

	  console.error(err);

	  res.status(500).json({
	  	status: false,
	  	response: "Couldnt retrieve Latest news and Events from server"
	  })
	})
})

app.get("/api/news&events_page/fetch_news&events", (req,res)=>{

	sqlite.transaction((trx) => {

	  const result = {};

	  return trx('events_table')
	    .select('*')
	    .then((data1) => {
	      result.events_table = data1;
	      return trx('news_table')
	        .select('*')
	    })
	    .then((data2) => {
	      result.news_table = data2;
	      return result; // return the collected object
	    });

	})
	.then((result)=>{
		if(result &&
	    typeof result === 'object' &&
	    Array.isArray(result.events_table) &&
	    Array.isArray(result.news_table)){
	    	const resp = {
	    		success: true,
				tables: result
	    	}
			res.json(resp)
		}
	})
	.catch((err)=>{
		console.log(err)
		res.json({
			success: false
		})
	})
})


app.get("/api/resident-involvment-page/get_all_images", (req,res)=>{

	sqlite.select('*')
	.from('images_table')
	.then((images)=>{
		console.log(images)
		if(images.length > 0){
			res.status(200).json({
				success: true,
				data: images
			})
		}
		else{
			res.status(200).json({
				success: true
			})
		}
	})
	.catch((err)=>{
		res.status(404).json({
			success: false
		})
	})	
})



app.post("/api/index-page/submit_user_email",(req,res)=>{

	const user_email = req.body.user_email;

	sqlite('user_emails')
	.insert({
		user_email: user_email,
	})
	.then((result)=>{
		res.status(200).json({
			success: true,
			data: user_email
		})
	})
	.catch((err)=>{
		res.status(404).json({
			success: false
		})
	})
})

app.post("/api/contact-page/send_email", (req,res)=>{

	console.log(req.body)

	const { name, email, telephone, msg } = req.body;

	  if (!name || !email || !msg) {
	    return res.status(400).json({ success: false, message: "Missing required fields" });
	  }


    //  return nodemailer.sendMail({
    //   from: `"${name}" <abbey_road_send_email@yahoo.com>`, // sender address
    //   to: "benowusu@hotmail.co.uk", // replace with your recipient
    //   subject: `Message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nTelephone: ${telephone || "N/A"}\nMessage: ${msg}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Telephone:</strong> ${telephone || "N/A"}</p>
    //          <p><strong>Message:</strong><br/>${msg}</p>`
    // })
    // .then((res)=>{
    // 	console.log(res)
    // 	console.log("Message sent: %s", info.messageId);
    // })
    // .catch((err)=>{
    // 	console.log(err)
    // })

	  return res.json({
	  	status:true
	  })
})

app.post("/api/login-page/website_admin_login", (req,res)=>{

	sqlite.select('*')
	.from('website_admin')
	.then((data)=>{

		console.log(data[0].password)

		const comparePassword = 
		bcrypt.compareSync(req.body.password, data[0].password);


		if(comparePassword){

			if (process.env.NODE_ENV === "production"){


				res.status(200).json({
					status: true
				})
		
			}
			else{
	
				res.status(200).json({
					status: true
				})
			}

		}
		else{
			res.status(404).json({
				status: false
			})
		}
	})
	.catch((err)=>{
		console.log(err)
		res.status(404).json({
			status: false
		})
	})
})

app.post("/api/login-page/board_members_login", (req,res)=>{

	sqlite('board_members')
	.where({
		username: req.body.username
	})
	.select('password')
	.then((password)=>{

		console.log(password[0].password);

		const comparePassword = 
		bcrypt.compareSync(req.body.password, password[0].password);

		if(comparePassword){

			if (process.env.NODE_ENV === "production"){


				res.status(200).json({
					status: true
				})
		
			}
			else{

				res.status(200).json({
					status: true,
				})
			}

		}
		else{
			res.status(404).json({
				status: false
			})
		}
	})
	.catch((err)=>{
		console.log(err)
		res.status(404).json({
			status: false
		})
	})
})

// ADMINNNNNN

app.get("/api/admin_board_members_page/fetch_board_members", (req,res)=>{

	sqlite.select('username')
	.from('board_members')
	.then((data)=>{
		console.log(data)
		res.status(200).json({
			success:true,
			board_members: data
		})
	})
	.catch((err)=>{
		console.log(err)
		res.status(200).json({
			success:false,
			err: err
		})
	})
})

app.post("/api/admin_board_members_page/add_board_members",(req,res)=>{


	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(req.body.password, salt);

	if(req.body.username.length > 0){

		sqlite('board_members')
		.returning('username')
		.insert({
			username: req.body.username,
			password: hash
		})
		.then((data)=>{

			if(data[0].username === req.body.username){
				res.status(200).json({
					success: true
				})
			}
			else{
				res.status(404).json({
					success:false
				})
			}
		})
		.catch((err)=>{
			if(err.errno === 19){
				res.status(404).json({
					success:false,
					username_exists: true
				})
			}
			else{
				res.status(404).json({
					success: false
				})
			}

		})
	}
	else{
		res.status(404).json({
			success:false
		})
	}

})

app.post("/api/admin_board_members_page/edit_board_members", (req,res)=>{

	if(req.body.username !== null &&
		req.body.password !== null){

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);


		sqlite('board_members')
		.where({
			username: req.body.old_username
		})
		.returning('username')
		.update({
			username: req.body.username,
			password: hash
		})
		.then((data)=>{
			console.log(data)
			if(data[0].username === req.body.username){
				res.status(200).json({
					success: true
				})
			}
			else{
				res.status(404).json({
					success: false
				})	
			}
		})
		.catch((err)=>{
			console.log(err)
			res.status(404).json({
				success: false
			})	
		})
	}
	else if(req.body.username === null){

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);

		sqlite('board_members')
		.where({
			username: req.body.old_username
		})
		.returning('username')
		.update({
			password: hash
		})
		.then((data)=>{
			console.log(data)
			if(data[0].username === req.body.old_username){
				res.status(200).json({
					success: true
				})
			}
			else{
				res.status(404).json({
					success: false
				})	
			}
		})
		.catch((err)=>{
			res.status(404).json({
				success: false
			})	
		})
	}
	else if(req.body.password === null){

		sqlite('board_members')
		.where({
			username: req.body.old_username
		})
		.returning('username')
		.update({
			username: req.body.username
		})
		.then((data)=>{
			console.log(data)
			if(data[0].username === req.body.username){
				res.status(200).json({
					success: true
				})
			}
			else{
				res.status(404).json({
					success: false
				})	
			}
		})
		.catch((err)=>{
			res.status(404).json({
				success: false
			})	
		})
	}

})

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
	console.log(`app is listening on port ${PORT}`)
})





