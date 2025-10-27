import axios from 'axios';

const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY; // get from Chapa dashboard

export const initiatePayment = async (req, res) => {
  const { amount, email, first_name, last_name, tx_ref } = req.body;

  try {
    const response = await axios.post(
      'https://api.chapa.co/v1/transaction/initialize',
      {
        amount,
        currency: 'ETB',
        email,
        first_name,
        last_name,
        tx_ref,          // unique transaction reference
        callback_url: 'http://localhost:3000/payment/callback',
      },
      {
        headers: {
          Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
        },
      }
    );

    res.status(200).json(response.data); // contains payment URL
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Payment initiation failed', error });
  }
};

// export const verifyPayment = async (req, res) => {
//   const { tx_ref } = req.params;
//     try {
//     const response = await axios.get(
//       `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
//       {
//         headers: {
//           Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
//         },
//       }
//     );
//     res.status(200).json(response.data); // contains payment status
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Payment verification failed', error });
//   }
// };
export const verifyPayment = async (req, res) => {
  const { tx_ref } = req.query; // Chapa sends tx_ref

  try {
    const response = await axios.get(
      `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      {
        headers: { Authorization: `Bearer ${CHAPA_SECRET_KEY}` }
      }
    );

    const data = response.data.data;
    if (data.status === 'success') {
      // Payment successful, update order in DB
      res.status(200).json({ message: 'Payment successful', data });
    } else {
      res.status(400).json({ message: 'Payment failed', data });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Verification failed', error });
  }
};

