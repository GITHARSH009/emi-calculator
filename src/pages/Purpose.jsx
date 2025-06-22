import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { purposeLoan } from '../database/purposeloan';

const Purpose = () => {
    const quickLinks = purposeLoan.slice(1, 5).map((item) => ({
        title: item.title.toUpperCase(),
        subtitle: 'Click here',
        item: item,
    }));

    const ArticleSection = ({ title, children }) => (
        <section className="mb-6">
            <h2 className="text-xl font-bold mt-6 mb-2">{title}</h2>
            {children}
        </section>
    );

    const ListItem = ({ children }) => <li className="mb-2">{children}</li>;

    return (
        <div className="p-4 bg-white text-black text-lg">
            <div className="mb-6 border-b-2 p-2">
                {quickLinks.map((link, index) => (
                    <Link key={index} to="/description" state={{ item: link.item }}>
                        <div className="flex justify-between items-center p-4 mb-2 border-3 border-dotted border-gray-300 rounded-lg">
                            <div>
                                <h3 className="font-bold text-md">{link.title}</h3>
                                <p className="text-xs text-gray-500">{link.subtitle}</p>
                            </div>
                            <ChevronRight size={20} className="text-gray-400" />
                        </div>
                    </Link>
                ))}
            </div>

            <article className="prose max-w-none">
                <h1 className="text-2xl font-bold mb-4">Purpose Loan: Unlocking Financial Flexibility for Every Need</h1>

                <p>A purpose loan is a versatile financial tool designed to help individuals and businesses access funds tailored to specific goals or requirements. Unlike general loans that are often restricted or tied to a particular use, purpose loans come with flexible terms and are meant to support a wide range of life events and business needs.</p>
                <p>Whether you're planning a home renovation, seeking working capital for your startup, financing education, or buying a vehicle, a purpose loan can provide quick and convenient access to money without the hassle of extensive paperwork or long approval times.</p>

                <ArticleSection title="What is a Purpose Loan?">
                    <p>Purpose loans are categorized based on their intended use, helping lenders assess risk and tailor loan conditions accordingly. These loans can be secured or unsecured depending on the amount and the borrower's credit profile. Typically, lenders require minimal documentation for approval, making purpose loans an attractive choice for quick funding.</p>
                </ArticleSection>

                <ArticleSection title="Common Types of Purpose Loans">
                    <ul>
                        <ListItem><strong>Personal Loan:</strong> Unsecured loans used for a variety of personal needs like medical emergencies, travel, or family events.</ListItem>
                        <ListItem><strong>Business Loan:</strong> Offers capital for expanding a business, managing cash flow, or purchasing equipment and inventory.</ListItem>
                        <ListItem><strong>Home Loan:</strong> Used for purchasing a new home, constructing a house, or buying a residential property.</ListItem>
                        <ListItem><strong>Education Loan:</strong> Covers tuition fees, living expenses, books, and other educational costs for domestic and international studies.</ListItem>
                        <ListItem><strong>Car Loan:</strong> Financing option for buying a new or used vehicle with flexible repayment options.</ListItem>
                        <ListItem><strong>Gold Loan:</strong> A secured loan taken by pledging gold ornaments, known for quick disbursal and minimal documentation.</ListItem>
                        <ListItem><strong>Mortgage Loan:</strong> Secured loan where property is used as collateral to raise funds for any high-value purpose.</ListItem>
                        <ListItem><strong>Agriculture Loan:</strong> Offered to farmers for crop production, equipment purchase, irrigation, or land development.</ListItem>
                    </ul>
                </ArticleSection>

                <ArticleSection title="Why Choose a Purpose Loan?">
                    <p>The flexibility of purpose loans makes them an excellent financial solution for various situations. Here's why many borrowers prefer them:</p>
                    <ul>
                        <ListItem><strong>Versatility:</strong> You can borrow funds for almost any legitimate need without restrictions.</ListItem>
                        <ListItem><strong>Quick Approval:</strong> Streamlined processes and minimal paperwork help secure loans fast.</ListItem>
                        <ListItem><strong>Flexible Repayment:</strong> Choose tenure options that suit your budget, from short-term to long-term.</ListItem>
                        <ListItem><strong>Competitive Interest Rates:</strong> Rates vary based on loan type, credit score, and collateral but often remain reasonable.</ListItem>
                        <ListItem><strong>Credit Building:</strong> Timely repayments can improve your credit score and financial reputation.</ListItem>
                    </ul>
                </ArticleSection>

                <ArticleSection title="Final Thoughts">
                    <p>Purpose loans serve as a powerful financial instrument to achieve goals without compromising your immediate cash flow. Their flexibility, combined with easy application and quick approvals, makes them a popular choice for individuals and businesses alike. By choosing the right type of loan, understanding terms, and managing repayments responsibly, you can unlock the benefits of financial freedom tailored specifically to your needs.</p>
                </ArticleSection>
            </article>
        </div>
    )
}

export default Purpose;
