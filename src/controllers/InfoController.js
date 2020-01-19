const mongoose = require('mongoose');
const Info = mongoose.model('Info');

mongoose.set('useFindAndModify', false);

module.exports = {

    // Pick all the itens
    async index(req, res) {
        const infos = await Info.find();

        return res.json(infos);
    },

    // Pick the last item
    async last_index(req, res) {
        const infos = await Info.findOne().sort({ _id: -1 });

        return res.json(infos);
    },

    // Get first item of our database
    async first_index(req, res) {
        const infos = await Info.findOne().sort({ _id: 1 });

        return res.json(infos);
    },

    // Find element by pcKey
    async findKey(req, res) {
        const infos = await Info.find({pcKey: req.params.id});

        return res.json(infos);
    },

    // Send Info to Server
    async send(req, res) {
        const info = await Info.create(req.body);

        return res.json(info);
    },

    // Delete based on id
    async destroy(req, res) {
        await Info.findByIdAndRemove(req.params.id);

        return res.send();
    },

    // Delete based on pcKey
    async destroyByPcKey(req, res) {
        //const info = await Info.find({pcKey: req.params.id});
        await Info.deleteOne({pcKey: req.params.id});

        return res.send();
    },

    // Search and update based on pcKey
    async updateByPcKey(req, res) {
        const info = await Info.findOneAndUpdate({pcKey: req.params.id}, req.body, { new: true });

        return res.send();
    },

    async a() {

    },

};