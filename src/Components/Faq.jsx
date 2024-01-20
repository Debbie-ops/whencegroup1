import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Faq = () => {
  const faqs = [
    { id: 1, title: 'What are the interest rates and why are they structured as they are?',
     content: 'a) 15% - When a client borrows and pays back within a week. b) 30% - When client borrows and pays back after a week but not more than a week before the due date. c) 35% - When the client borrows and pays back a week before the due date. d) 40% - When a client pays back on their due date. All loans are signed for at 40% even though the client will pay back earlier as a precautionary measure because most clients do not live up to such promises. Hence the lower rate consideration is only actually acknowledged once the payment is made.  ' },
    { id: 2, title: 'Why do the loans have a maturity of one month? Or why is the payback period only one month?', 
    content: 'They are payday loans and ideally are dependent upon one’s monthly salary, apart from that, anything beyond a month become a very risky undertaking on the part of Whence hence a payback period of one month tends to fit in well with our risk profile and our ability to manage respective risk.', image: '' },
    { id: 3, title: 'Why doesn’t the institution give out big amounts?', 
    content: ' The loans are meant to help those that require small amounts of money meant to cover budget shortfalls or emergencies that do not need a lot of money, anyone who does not meet this clientele profile may not be advised to obtain our loans as they might not get value for the interest they will have to pay. ', image: '' },
    { id: 4, title: 'Why is the interest rate at 40%?', 
    content: ' Our rates start from as low 15% hence a client always has a choice as to how much they would want to pay. It is also worth mentioning that our products have been designed for those with an emergency or unforeseen constraint which does not need a huge sum of money to sort out, hence all those who meet this profile should be able to benefit from our low rates. The 40% is for the risk involved in lending out money for the whole month and we have no hidden costs as a client knows how much exactly they will pay and how that has been arrived at.', image: '' },
    { id: 5, title: 'Why can’t the institution reduce its interest rate for its good clients?', 
    content: 'Our good clients can always choose to enjoy discounted rates from as low as 15% if they wish to pay less by making early payments.', image: '' },
    { id: 6, title: 'Why are the payroll based loans given a three months payback period only?', 
    content: 'The payback period for payroll loans is three (03) months because we do not give big amounts and our payroll based loans are only at 15% simple interest hence the risk on the company cannot allow extending the period further as to do that would greatly change our risk profile and might have to increase the rates but we would rather keep them low hence the development.', image: '' },
    { id: 7, title: 'Isn’t 40% too high to be paid within one month?', 
    content: 'Considering what other financial institutions are charging, the hidden costs involved, 40% simple interest is fair, our clients have four options with regards to what rate they can payback from as low as 15%', image: '' },
    { id: 8, title: 'Why doesn’t the institution have adverts or posters of itself in the streets and media?', 
    content: 'We want to grow organically with no external resources hence our current marketing strategy was working well in tandem with our growth strategy.', image: '' },
    { id: 9, title: 'Why don’t we have a marketing team??', 
    content: 'All members of staff are part of the marketing team as they are required to at all times preach the Whence Gospel and share information about our products and services.', image: '' },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? null : faqId);
  };

  return (
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
        <div className="text-center md:w-1/2 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neautralGrey mb-8 md:w-3/4 mx-auto">
            Find answers to common questions below.
          </p>
        </div>
        <div className="grid lg:grid-cols-1 gap-8">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg p-4 border-2 text-center">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className="text-lg font-medium">{faq.title}</h3>
                <span>{activeFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              {activeFaq === faq.id && <p className="mt-3">{faq.content}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Faq;
