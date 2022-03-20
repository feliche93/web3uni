import SectionContent from "../UI/SectionContent"

const faqs = [
  {
    id: 1,
    question: "Why did you start web3 uni?",
    answer:
      "I have many friends who want to explore the web3 and crypto world, but are unsure where to start. Most articles are boring so I wanted to build a dediated fun and interactive web3 univerity.",
  },
  {
    id: 2,
    question: "Why should I sign up for web3 uni?",
    answer:
      "It's free and you will learn a lot of cool stuff. You will be able to buy tokens and learn how to interact with the decentralized web3 world. Bonus: For each completed lesson you will earn a free NFT.",
  },
  {
    id: 3,
    question: "How much does it cost? Can I still sign up for web3 uni if I do not have money to invest?",
    answer:
      "Yes! Web3 uni is completly free and we will learn and pratice on test nets. This way you do not have to be afraid to make any mistakes and you can get the whole web3 experience without investing real money.",
  },
  // More questions...
]

export default function Faq() {
  return (
    <SectionContent>
      <h2 id="faq" className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
      <div className="mt-8">
        <dl className="divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionContent>
  )
}