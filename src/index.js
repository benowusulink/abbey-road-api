const path = require('path');

const express = require('express');
const app = express();
const cors = require('cors');

const sqlite = require("./database/knex/knex.js").sqlite_db;
const nodemailer = require("./utilities/nodemailer/nodemailer.js").transporter;


app.use(express.static(path.join(__dirname, '../public')));

app.use(cors())
app.use(express.json());

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

app.get("/api/event_page/fetch_events", (req,res)=>{

	sqlite.select('*')
	.from('events_table')
	.then((events)=>{
		if(events.length > 0){
			res.status(200).json({
				success: true,
				data: events
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

app.get("/api/news_page/fetch_news", (req,res)=>{

	sqlite.select('*')
	.from('news_table')
	.then((news)=>{
		if(news.length > 0){
			res.status(200).json({
				success: true,
				data: news
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

const PORT = process.env.PORT || 3001;

app.listen(PORT,(req,res)=>{
	console.log(`server listening on port ${PORT}`);

})