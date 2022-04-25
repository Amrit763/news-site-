module.exports = (req, news) => {
    // if (req.price)
    //     room.price = req.price;
    // if (req.numberOfRoom)
    //     room.numberOfRoom = req.numberOfRoom;
    // if (req.carParking)
    //     room.carParking = req.carParking;
    // if (req.bikeParking)
    //     room.bikeParking = req.bikeParking;
    if (req.title)
        news.title = req.title;
    if (req.categories)
        news.categories = req.categories;
    if (req.description)
        news.description = req.description;
    // console.log('ismap', req.isMap + '   ' + req.lat + '     ' + req.lng);
    // if (req.isMap)
    //     news.map.isMap = req.isMap;
    // if (req.lat)
    //     news.map.lat = req.lat;
    // if (req.lng)
    //     news.map.lng = req.lng;
    return news;
}