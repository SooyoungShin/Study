const OpenAI = require('openai')

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  return completion
  console.log(completion.choices);
}

main();