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

    async first_index(req, res) {
        const infos = await Info.findOne().sort({ _id: 1 });

        return res.json(infos);
    },

    // Send Info to Server
    async send(req, res) {
        const info = await Info.create(req.body);

        return res.json(info);
    },

    // DElete based on id
    async destroy(req, res) {
        await Info.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async a() {

    },

};