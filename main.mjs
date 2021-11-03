import express from 'express'

const app = express()

const eventsObject = [
    { "eventName": "Karaoke", "eventDate": "5.11" },
    { "eventName": "Pokernight", "eventDate": "13.11" },
    { "eventName": "Gin Tasting", "eventDate": "20.11" },
    { "eventName": "Open Mic", "eventDate": "26.11" },
    { "eventName": "Ways of Rum", "eventDate": "2.12" },
    { "eventName": "Karaoke", "eventDate": "9.12" },
    { "eventName": "Beerpong", "eventDate": "17.12" },
    { "eventName": "Christmas Party", "eventDate": "23.12" },
    { "eventName": "New Year", "eventDate": "31.12" },
    { "eventName": "Pokernight", "eventDate": "6.1" },
]

app.get("/events", (req, res) => {
    res.json(eventsObject)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});
