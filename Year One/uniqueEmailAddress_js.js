function uniqueEmailAddress(emails) {
    cleanEmails = {};
    for (const email in emails) {
        const splitted = email.split('@');
        let name = splitted[0];
        const domain = splitted[1];
        name.replace(".","");
        if (name.includes("+")) {
            name = name.substring(0, name.indexOf("+"));
        }
        cleanedEmail = `${name}@${domain}`;
        cleanEmails[cleanedEmail] = true;
    }
    return Object.keys(cleanEmails).length;
}