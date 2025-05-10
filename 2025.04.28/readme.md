<h1><u><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="star">Lecture time queries and outputs</u></h1>

(01)Delete the currently selected database.

 <b>db.dropDatabase()</b>
     
(02)Delete a specific collection in the current database.

 <b>db.sampledata.drop()</b>

   
   ![1,2](https://github.com/user-attachments/assets/2c6f9e91-7ea7-4589-888a-e7411e72395a)

(03)Delete a single document from the degrees collection, based on its _id.

<b>db.degrees.deleteOne({_id:ObjectId('681a3cc10b635026ae4a2a1f')})</b>

     
![3](https://github.com/user-attachments/assets/909c717e-c2dc-4fc3-8dc6-40a945386bb2)

(04)Retrieve only specific field(name and duration) from all documents in the degrees collection.

<b>db.degrees.find().projection(['name','duration'])</b>



![4](https://github.com/user-attachments/assets/7b72071d-ba50-4edf-8ffb-a5a83527b299)

(05)Retrieve only the name field from all documents in the degrees collection (along with _id by default).

<b> db.degrees.find().projection(['name'])</b>


(06)Retrieve only the _id field from all documents in the degrees collection.

<b> db.degrees.find().projection([{'name':1},{'_id':-1}])</b>

     
![6](https://github.com/user-attachments/assets/9353e6c6-5b37-42ef-8e87-c462dfd75171)

(07)Fetch a list of degree names from the degrees collection.

<b>db.degrees.find({},{name:1,_id:0}).pretty()</b>


     
![7](https://github.com/user-attachments/assets/bcf81896-af3c-4bed-86a5-1bf9d07141cf)

(08)Delete all documents from the degrees collection where the duration field is less than 4.

<b> db.degrees.deleteMany({duration:{$lt:4}})</b>

 Retrieves all documents from the degrees collection.
 
 <b> db.degrees.find({},{name:1,_id:0}).pretty()</b>


     
![8](https://github.com/user-attachments/assets/22dd3597-24c0-42ac-8ae2-d28144d04807)

(09)To update the document with the given _id by setting the name field to 'BIT' and the duration field to 3.

<b> db.degrees.updateOne({_id:ObjectId('681ebe8053cbd47ea071ea27')},{$set:{name:'BIT',duration:3}})</b>
 
 To fetch and display the document with the specified _id, showing all fields and values for that specific degree record.
    
<b> db.degrees.findOne({_id: ObjectId('681ebe8053cbd47ea071ea27')})</b>

 ![9](https://github.com/user-attachments/assets/82aaec67-b9a0-47b4-90b8-3a04c25f77f5)


(10)To increase the duration by 1 for all degree programs that currently have a duration of 4 years or more.

<b> db.degrees.updateMany({duration:{$gte:4}},{$inc:{duration:1}})</b>
	 
<b>db.degrees.find({},{name:1,duration:1})</b>

  
![10](https://github.com/user-attachments/assets/d805a17d-1a3c-43cd-a6d4-bb7785f084bf)

(11)To add "PHP" to the skills array field for the specific student

<b> db.students.updateOne({regno:"2021IT003"},{$push:{skills:"PHP"}})</b>
	 
<b> db.students.findOne({regno:"2021IT003"})</b>


![11](https://github.com/user-attachments/assets/651a8cdf-d040-4da9-b3f1-cc2f2d304df4)

<h1><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="star"> <u>Exercise Queries and Outputs</u></h1>

(01)create a database bookshop
(02)create a collection books


![1](https://github.com/user-attachments/assets/fe8dda3d-a726-4531-bf69-b06ed8d1661a)

(03)insert the following data
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "published_year": 1937,
  "genres": ["Fantasy", "Adventure"],
  "pages": 310,
  "available": true,
  "rating": 4.8
}

  {
    "title": "1984",
    "author": "George Orwell",
    "published_year": 1949,
    "genres": ["Dystopian", "Political Fiction"],
    "pages": 328,
    "available": true,
    "rating": 4.7
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "published_year": 1960,
    "genres": ["Southern Gothic", "Drama"],
    "pages": 281,
    "available": false,
    "rating": 4.6
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_year": 1925,
    "genres": ["Tragedy"],
    "pages": 180,
    "available": true,
    "rating": 4.4
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "published_year": 1932,
    "genres": ["Science Fiction", "Dystopian"],
    "pages": 311,
    "available": true,
    "rating": 4.2
  }
  
Query:
db.books.insertMany(
[
{
"title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "published_year": 1937,
  "genres": ["Fantasy", "Adventure"],
  "pages": 310,
  "available": true,
  "rating": 4.8
},
{
"title": "1984",
    "author": "George Orwell",
    "published_year": 1949,
    "genres": ["Dystopian", "Political Fiction"],
    "pages": 328,
    "available": true,
    "rating": 4.7
},
{
"title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "published_year": 1960,
    "genres": ["Southern Gothic", "Drama"],
    "pages": 281,
    "available": false,
    "rating": 4.6
},
{
"title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_year": 1925,
    "genres": ["Tragedy"],
    "pages": 180,
    "available": true,
    "rating": 4.4
},
{
"title": "Brave New World",
    "author": "Aldous Huxley",
    "published_year": 1932,
    "genres": ["Science Fiction", "Dystopian"],
    "pages": 311,
    "available": true,
    "rating": 4.2
}])




![2 0](https://github.com/user-attachments/assets/fb2173b0-ecce-43f0-9f4d-acee245899bf)


![2 1](https://github.com/user-attachments/assets/3812e04c-d93d-4a80-98e6-b2df5d0211ac)

(04)Find all books

Query:
db.books.find()


![3 0](https://github.com/user-attachments/assets/0ab40aa1-6bd5-4a7c-bf51-a0adb54c2c2e)

 ![3 1](https://github.com/user-attachments/assets/43a2026c-3bd5-495e-8bdf-17a2c05895e8)


(05)Find all books published after 1950

Query:
db.books.find({published_year:{$gt:1950}})

![4](https://github.com/user-attachments/assets/811e87b2-3f30-4d09-851a-1de2be131810)

(06)Find the avilable books


 ![5 0](https://github.com/user-attachments/assets/658d54be-96f1-4df3-862d-2c448ae93584)

![5 1](https://github.com/user-attachments/assets/1c3bc2cc-b01c-4eb3-b586-99ab07b26f72)

(07)Find all books that belong to the "Dystopian" genre

Query:
db.books.find({genres:"Dystopian"})



![6](https://github.com/user-attachments/assets/29d5ba92-70f1-442b-a93e-8c65c73bb3c8)




(08)Find the books which published after 1960 and had rating more than 4.0

Query:
db.books.find({ published_year: { $gt: 1960 }, rating: { $gt: 4.0 } })

![7](https://github.com/user-attachments/assets/48650cc4-421f-4c93-b9c3-200376497c88)




(09)Project only title and author fields:

Query:
db.books.find({}, { title: 1, author: 1, _id: 0 })

![8](https://github.com/user-attachments/assets/89b91cca-de06-4f4a-8d22-55909521c166)



(10)Update the book "1984" to set available: false:

Query:
db.books.updateOne({ title: "1984" }, { $set: { available: false } })



![9](https://github.com/user-attachments/assets/acdc2b46-25ad-456d-8ad7-84a99969f564)

(11)Increase the rating of "Brave New World" by +0.1:

Query:
db.books.updateOne({ title: "Brave New World" }, { $inc: { rating: 0.1 } })




![10](https://github.com/user-attachments/assets/9bb8d503-870d-4091-b506-d5c16220c380)


(12)Add a new genre "Classic" to "The Great Gatsby":

Query:
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $addToSet: { genres: "Classic" } }
)


![11](https://github.com/user-attachments/assets/36c7d2ef-a8f4-4e62-a61d-0e808fec358b)

(13)Sort books by published_year ascending:

Query:
db.books.find().sort({ published_year: 1 })
![12 0](https://github.com/user-attachments/assets/345382f2-ffcc-41bd-b1ca-e98b79a02224)


![12 1](https://github.com/user-attachments/assets/f16f7c5a-ea5a-434c-bc62-f9b8123f3b7c)

![12 2](https://github.com/user-attachments/assets/ffef852b-6c56-4bab-9ab3-ea886243fc02)


(14)Sort books by rating descending:


Query:
db.books.find().sort({ rating: -1 })

![13 0](https://github.com/user-attachments/assets/9d6a9495-095f-40a4-b7d1-fcbb83eb2ad5)

![13 1](https://github.com/user-attachments/assets/0877d9b3-4b3c-4cac-bf14-d62181612f6c)

(15)Delete all books with a rating lower than 4.5:


Query:
db.books.deleteMany({ rating: { $lt: 4.5 } })

![14](https://github.com/user-attachments/assets/3ac783f8-b79c-4fd5-9359-8635128c7d3d)
