import { StyleSheet, Text, ScrollView, View, Linking } from 'react-native';
import React, { useRef } from 'react';

const TermsConditions = () => {
    const scrollView = useRef(null);

    const headerAccounts = useRef(null);
    const headerContent = useRef(null);
    const headerBackups = useRef(null);
    const headerResources = useRef(null);
    const headerProhibited = useRef(null);
    const headerProperty = useRef(null);
    const headerLimitations = useRef(null);
    const headerIndemnification = useRef(null);
    const headerSeverability = useRef(null);
    const headerChanges = useRef(null);
    const headerAcceptance = useRef(null);
    const headerContacts = useRef(null);

    const scrollToRef = (ref) => {
        if (scrollView.current && ref.current) {
            ref.current.measureLayout(scrollView.current, (x, y) => {
                scrollView.current.scrollTo({x, y, animated: false});
            });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.main} ref={scrollView}>
                <View style={styles.header}>
                    <Text style={styles.title}>Terms & Conditions</Text>
                </View>
                <Text style={styles.text}>
                    These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the “FavAnswer” mobile application (“Mobile Application” or “Service”) and any of its related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and ConvertClick LLC (“ConvertClick LLC”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Mobile Application and Services. By accessing and using the Mobile Application and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and ConvertClick LLC, even though it is electronic and is not physically signed by you, and it governs your use of the Mobile Application and Services.
                </Text>
                <Text style={styles.textHeader}>Table of Contents</Text>
                <View style={styles.indent}>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerAccounts)}>Accounts and Membership</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerContent)}>User Content</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerBackups)}>Backups</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerResources)}>Links to Other Resources</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerProhibited)}>Prohibited Uses</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerProperty)}>Intellectual Property Rights</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerLimitations)}>Limitation of Liability</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerIndemnification)}>Indemnification</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerSeverability)}>Severability</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerChanges)}>Changes and Amendments</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerAcceptance)}>Acceptance of These Terms</Text>
                    <Text style={[styles.text, styles.link]} onPress={() => scrollToRef(headerContacts)}>Contacting Us</Text>
                </View>
                <Text style={styles.textHeader} ref={headerAccounts}>Accounts and Membership</Text>
                <Text style={styles.text}>
                    You must be at least 16 years of age to use the Mobile Application and Services. By using the Mobile Application and Services and by agreeing to this Agreement you warrant and represent that you are at least 16 years of age.
                </Text>
                <Text style={styles.text}>
                    If you create an account in the Mobile Application, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.
                </Text>
                <Text style={styles.textHeader} ref={headerContent}>User Content</Text>
                <Text style={styles.text}>
                    We do not own any data, information or material (collectively, “Content”) that you submit in the Mobile Application in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may monitor and review the Content in the Mobile Application submitted or created using our Services by you. You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you. Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable. You also grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose.
                </Text>
                <Text style={styles.textHeader} ref={headerBackups}>Backups</Text>
                <Text style={styles.text}>
                    We perform regular backups of the Content and will do our best to ensure completeness and accuracy of these backups. In the event of the hardware failure or data loss we will restore backups automatically to minimize the impact and downtime.
                </Text>
                <Text style={styles.textHeader} ref={headerResources}>Links to Other Resources</Text>
                <Text style={styles.text}>
                    Although the Mobile Application and Services may link to other resources (such as websites, mobile applications, etext.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link in the Mobile Application. Your linking to any other off-site resources is at your own risk.
                </Text>
                <Text style={styles.textHeader} ref={headerProhibited}>Prohibited Uses</Text>
                <Text style={styles.text}>
                    In addition to other terms as set forth in the Agreement, you are prohibited from using the Mobile Application and Services or Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Mobile Application and Services, third party products and services, or the Internet; (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; (i) for any obscene or immoral purpose; or (j) to interfere with or circumvent the security features of the Mobile Application and Services, third party products and services, or the Internet. We reserve the right to terminate your use of the Mobile Application and Services for violating any of the prohibited uses.
                </Text>
                <Text style={styles.textHeader} ref={headerProperty}>Intellectual Property Rights</Text>
                <Text style={styles.text}>
                    “Intellectual Property Rights” means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by ConvertClick LLC or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with ConvertClick LLC. All trademarks, service marks, graphics and logos used in connection with the Mobile Application and Services, are trademarks or registered trademarks of ConvertClick LLC or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Mobile Application and Services may be the trademarks of other third parties. Your use of the Mobile Application and Services grants you no right or license to reproduce or otherwise use any of ConvertClick LLC or third party trademarks.
                </Text>
                <Text style={styles.textHeader} ref={headerLimitations}>Limitation of Liability</Text>
                <Text style={styles.text}>
                    To the fullest extent permitted by applicable law, in no event will ConvertClick LLC, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of ConvertClick LLC and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount no greater than one dollar or any amounts actually paid in cash by you to ConvertClick LLC for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.
                </Text>
                <Text style={styles.textHeader} ref={headerIndemnification}>Indemnification</Text>
                <Text style={styles.text}>
                    You agree to indemnify and hold ConvertClick LLC and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys’ fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Mobile Application and Services or any willful misconduct on your part.                </Text>
                <Text style={styles.textHeader} ref={headerSeverability}>Severability</Text>
                <Text style={styles.text}>
                    All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.
                </Text>
                <Text style={styles.textHeader} ref={headerChanges}>Changes and Amendments</Text>
                <Text style={styles.text}>
                    We reserve the right to modify this Agreement or its terms related to the Mobile Application and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.
                </Text>
                <Text style={styles.text}>
                    An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the Mobile Application and Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.
                </Text>
                <Text style={styles.textHeader} ref={headerAcceptance}>Acceptance of These Terms</Text>
                <Text style={styles.text}>
                    You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Mobile Application and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Mobile Application and Services.
                </Text>
                <Text style={styles.textHeader} ref={headerContacts}>Contacting Us</Text>
                <Text style={styles.text}>
                    If you have any questions, concerns, or complaints regarding this Agreement, we encourage you to contact us using the details below:
                </Text>
                <View style={styles.indent}>
                    <Text style={[styles.text, styles.link]}
                        // does not work on ios simulator, but should work on real device
                        onPress={() => Linking.openURL('mailto:cs@favanswer.com')}
                    >cs@favanswer.com</Text>
                </View>
                <View style={styles.space}/>
            </ScrollView>
        </View>
    );
};

export default TermsConditions;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
    },
    header : {
        marginTop: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontSize: 24,
        fontWeight: '500',
    },
    space : {
        height: 25,
    },
    indent : {
        paddingLeft: 25,
    },
    main : {
        paddingHorizontal: 25,
    },
    textHeader : {
        fontSize: 20,
        marginTop: 25,
        fontWeight: '500',
    },
    text : {
        marginTop: 10,
    },
    link : {
        color: 'blue',
    },
});
