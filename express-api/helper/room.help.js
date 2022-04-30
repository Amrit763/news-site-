module.exports = (req, news) => {
    if (req.tags)
        room.tags = req.tags;
    if (req.title)
        news.title = req.title;
    if (req.categories)
        news.categories = req.categories;
    if (req.description)
        news.description = req.description;
    return news;
}