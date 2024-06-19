export const validateFood = (req, res, next) => {
    const { name, price, rating, img } = req.body;

    if (typeof name !== 'string' || name.length < 3 || name.length > 100) {
        return res.status(400).json({ error: 'Name must be a string between 3 and 100 characters' });
    }

    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: 'Price must be a positive number' });
    }

    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be a number between 0 and 5' });
    }

    // Validasi img (harus string dan URL yang valid)
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if (typeof img !== 'string' || !urlPattern.test(img)) {
        return res.status(400).json({ error: 'Image URL must be a valid URL' });
    }

    next();
};
