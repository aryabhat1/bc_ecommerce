const mongoose = require  ('mongoose');

mongoose.connect(
    // 'your connection string',
    'mongodb://127.0.0.1:27017/blockchain-ecommerce',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = {
    Payment

}

