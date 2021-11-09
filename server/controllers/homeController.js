const index = (req, res,) => {
  res.render('home/index', {
    title: 'ProjNotes',
  });
};

const greeting = (req, res) => {
  res.status(200).json({
    message: 'Hola Campeon de la Fullstack web',
  });
};

const about = (req, res) => {
  res.render('home/about', {title: 'A cerca de projnotes' });
};

export default {
  index,
  greeting,
  about,
};
