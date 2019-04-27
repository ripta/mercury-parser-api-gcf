const Mercury = require('@postlight/mercury-parser');

exports.mercuryParser = async (req, res) => {
  const key = req.get('x-api-key');
  if (key != process.env.MASTER_MERCURY_API_KEY) {
    return res.send("Invalid API Key.\n");
  }

  const url = req.query.url;
  if (!url) {
    return res.send("A URL must be provided.\n");
  }

  const result = await Mercury.parse(url);
  return res.send(result);
};
