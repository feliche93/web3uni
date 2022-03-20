import SectionContent from "./UI/SectionContent"

const faqs = [
  {
    id: 1,
    question: "How does the ingration work?",
    answer:
      "Copy our template and share it with the Social Notion integration. Next connect your favorite social media channels and you are good to go!",
  },
  {
    id: 2,
    question: "What social Media channels do you support?",
    answer:
      "At the start of the launch we are supporting LinkedIn as the first channel but will very soon add the reamining channels.",
  },
  // More questions...
]

export default function Faq() {
  return (
    <SectionContent>
      <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
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