module.exports = (req, news) => {
    // if (req.price)
    //     room.price = req.price;

    if (req.tags)
        room.tags = req.tags;
    if (req.date)
        room.date = req.date;
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