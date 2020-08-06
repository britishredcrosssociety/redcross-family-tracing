import * as express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/enquiry', (req, res) => {
  res.render('enquiry');
});

router.get('/what-help', (req, res) => {
  res.render('what-help');
});

router.get('/family-reunion', (req, res) => {
  res.render('family-reunion');
});

router.get('/find-two-ways', (req, res) => {
  res.render('find-two-ways');
});

router.get('/relative-message', (req, res) => {
  res.render('relative-message');
});

router.post('/director', (req, res) => {
  const page = req.body.page;
  if (page) {
    res.redirect(page);
    return;
  }

  const originalPage = req.headers.referer;
  if (originalPage) {
    res.redirect(originalPage);
    return;
  }

  console.error('There was an error at /director. Page: %d, referer: %d', page, originalPage);
  res.send('error');
});

router.get('*', function (req, res) {
  res.send('404');
});

export = router;
