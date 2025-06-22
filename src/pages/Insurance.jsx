import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insurance } from '../database/insurance';

const Insurance = () => {
    const quickLinks = insurance.map((item) => ({
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
    const OrderedListItem = ({ children }) => <li className="mb-2 list-decimal ml-5">{children}</li>;

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
                <h1 className="text-2xl font-bold mb-4">Understand and Use the Insurance Calculator Smartly</h1>

                <p>In today's fast-paced financial environment, securing your future and protecting your family is more important than ever. Insurance plays a major role in ensuring financial stability during uncertain times. But how do you know how much coverage you really need or what premium you should expect to pay? This is where an insurance calculator becomes an essential tool in your financial planning toolbox.</p>

                <ArticleSection title="What is an Insurance Calculator?">
                    <p>An insurance calculator is a digital tool that helps you estimate your insurance coverage needs and the premium you'll need to pay based on various inputs. It takes into account factors like your age, income, dependents, existing liabilities, and coverage duration to provide a tailor-made insurance plan that fits your goals and budget.</p>
                    <p>Available online through insurance companies and financial portals, the calculator simplifies what once was a complex process into a quick and reliable estimate. It is widely used for life insurance, health insurance, term insurance, car insurance, and even home insurance.</p>
                </ArticleSection>

                <ArticleSection title="Why Use an Insurance Calculator?">
                    <ul>
                        <ListItem>Helps you determine the exact sum assured required for your family's financial protection.</ListItem>
                        <ListItem>Gives you a clear premium estimate, helping you plan your monthly budget.</ListItem>
                        <ListItem>Saves time and effort in comparing different insurance plans manually.</ListItem>
                        <ListItem>Assists in understanding policy benefits, coverage limits, and exclusions.</ListItem>
                        <ListItem>Reduces the chances of being underinsured or overpaying.</ListItem>
                    </ul>
                </ArticleSection>

                <ArticleSection title="How Does an Insurance Calculator Work?">
                    <p>Insurance calculators vary slightly depending on the type of policy, but they generally require the following inputs:</p>
                    <ul>
                        <ListItem><strong>Age:</strong> Younger individuals usually pay lower premiums due to lower risk.</ListItem>
                        <ListItem><strong>Income:</strong> Determines how much insurance you can afford and what your financial obligations are.</ListItem>
                        <ListItem><strong>Coverage Term:</strong> The length of time you want the policy to last.</ListItem>
                        <ListItem><strong>Dependents:</strong> Your family size influences the amount of coverage needed.</ListItem>
                        <ListItem><strong>Health Profile:</strong> Smokers or individuals with medical issues may pay higher premiums.</ListItem>
                    </ul>
                    <p>Once the information is entered, the calculator uses built-in algorithms to determine:</p>
                    <ul>
                        <ListItem>Estimated premium based on market rates.</ListItem>
                        <ListItem>Total coverage or sum assured required.</ListItem>
                        <ListItem>Add-on riders or optional benefits that may suit you.</ListItem>
                        <ListItem>Best policy types that match your profile.</ListItem>
                    </ul>
                </ArticleSection>

                <ArticleSection title="Popular Types of Insurance You Can Calculate">
                    <ul>
                        <ListItem><strong>Life Insurance:</strong> Plans that provide financial support to your family after your passing.</ListItem>
                        <ListItem><strong>Term Insurance:</strong> Affordable coverage for a fixed term with large sum assured.</ListItem>
                        <ListItem><strong>Health Insurance:</strong> Covers medical bills, hospital stays, and treatments.</ListItem>
                        <ListItem><strong>Car Insurance:</strong> Required by law, covers theft, damage, and accidents.</ListItem>
                        <ListItem><strong>Home Insurance:</strong> Protects your property from fire, theft, or natural calamities.</ListItem>
                    </ul>
                </ArticleSection>

                <ArticleSection title="How to Use the Insurance Calculator Effectively">
                    <ol>
                        <OrderedListItem>Visit the calculator page on an insurance company's official website.</OrderedListItem>
                        <OrderedListItem>Select the type of insurance you want to calculate.</OrderedListItem>
                        <OrderedListItem>Enter your age, income, coverage period, and other required fields.</OrderedListItem>
                        <OrderedListItem>Review the results for estimated premium and sum assured.</OrderedListItem>
                        <OrderedListItem>Compare with other plans or adjust the input values for better options.</OrderedListItem>
                    </ol>
                </ArticleSection>

                <ArticleSection title="Final Thoughts">
                    <p>Making informed insurance decisions is no longer a time-consuming task. Thanks to insurance calculators, you now have complete control over your policy planning - from choosing the right premium to knowing how much coverage you need. It's time to take advantage of these tools and build a stronger, safer financial future.</p>
                    <p>Start using the insurance calculator today and protect what matters most - with clarity, confidence, and convenience.</p>
                </ArticleSection>
            </article>
        </div>
    )
}

export default Insurance;
