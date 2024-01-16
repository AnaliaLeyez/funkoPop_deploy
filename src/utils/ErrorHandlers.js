module.exports = {
    notFoundPage: (req, res) => res.status(404).render("404.ejs",{
        view: {
            title: "NOT FOUND"
        },
    })
  }