const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    Tag.findAll().then(tags => {
        res.send(JSON.stringify(tags));
        // projects will be an array of all Project instances
    })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
    Tag.findAll({where: {
            id: req.params.id
        }}).then(tags => {
        res.send(JSON.stringify(tags));
    })
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
    Tag.destroy({where: {
            id: req.params.id
        }}).then(tags => {
        res.send(JSON.stringify(tags));
    })
});

module.exports = router;
