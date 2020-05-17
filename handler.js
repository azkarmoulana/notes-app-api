export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello Serverless world. My name is Azkar Moulana :)`,
    }),
  };
};
