import React from 'react';
import { ChevronRight } from 'lucide-react';
import { finanace } from '../database/finance';
import { Link } from 'react-router-dom';

const Finance = () => {
  const quickLinks = finanace.map((item) => ({
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

  const ListItem = ({ children }) => <li className="mb-2 list-disc ml-5">{children}</li>;

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
        <h1 className="text-2xl font-bold mb-4">Mastering Finance: Your Guide to Smarter Money Management</h1>

        <p>Finance plays a central role in every aspect of modern life. Whether you're planning for the future, managing day-to-day expenses, building wealth, or running a business, understanding finance is essential to achieving your personal and professional goals.</p>
        <p>In this guide, we explore the fundamentals of finance, why it's important, how to manage it effectively, and the various tools and resources available to help you take control of your financial journey.</p>

        <ArticleSection title="What is Finance?">
          <p>Finance refers to the management of money and includes activities such as investing, borrowing, lending, budgeting, saving, and forecasting. It can be personal, corporate, or public in nature, and it serves as the backbone of every economy and financial decision.</p>
        </ArticleSection>

        <ArticleSection title="Types of Finance">
          <p>There are three major types of finance:</p>
          <ul>
            <ListItem><strong>Personal Finance:</strong> Budgeting, saving, insurance, retirement planning, and investments managed by individuals or households.</ListItem>
            <ListItem><strong>Corporate Finance:</strong> Financial strategies used by businesses to fund operations, grow capital, and improve shareholder value.</ListItem>
            <ListItem><strong>Public Finance:</strong> Government financial management, including taxation, budgeting, and spending at national and local levels.</ListItem>
          </ul>
        </ArticleSection>

        <ArticleSection title="The Importance of Financial Literacy">
          <p>Financial literacy means having the knowledge and skills to make informed financial decisions. It's not just about math - it's about understanding how money works, from credit scores to compound interest.</p>
          <p>With strong financial literacy, individuals are more likely to save, invest wisely, avoid debt traps, and prepare for emergencies. It's the foundation of personal independence and long-term financial security.</p>
        </ArticleSection>

        <ArticleSection title="Finance Tools and Calculators">
          <p>Finance calculators are essential for planning and decision-making. Whether you're determining your EMI, estimating retirement savings, or comparing loan interest, these tools help make complex calculations simple.</p>
          <ul>
            <ListItem><strong>Loan Calculator</strong> - Estimate monthly repayments.</ListItem>
            <ListItem><strong>SIP Calculator</strong> - Forecast mutual fund investments.</ListItem>
            <ListItem><strong>Budget Planner</strong> - Manage income and expenses.</ListItem>
            <ListItem><strong>Retirement Calculator</strong> - Plan future savings and corpus needs.</ListItem>
          </ul>
        </ArticleSection>

        <ArticleSection title="Conclusion: Finance for a Better Future">
          <p>Whether you're earning your first paycheck or managing a multinational business, finance is the key to achieving stability and success. Start small - track your income, learn about investments, and set achievable goals.</p>
          <p>With the right tools and knowledge, financial freedom is within reach. Stay consistent, stay informed, and take charge of your future - one financial step at a time.</p>
        </ArticleSection>
      </article>
    </div>
  )
}

export default Finance;
