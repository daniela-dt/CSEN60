# Web Security 

### Potential Security Oversights
 - No user authentication
 - Allowing weak authentication
 - Not sanitizing form entries & requests
 - Not ecrypting sensitive communications
 - Sessions that don't time out
 - Out-of-date(un-patched) software
    - New vulnerabilities discovered all the time
 - Bugs that expose user data

 ### Cross Site Scripting 
 - The attacker inserts arbitrary HTML on your web page
    - How can this ever happen?
- What can go wrong?
    - Change content of page
    - Steal user's info
- What if the HTML includes 'script' tags?
    - Replace the page with a new one
        - Fate instance of a page to get passwords, accounts, etc. 
- Pass info form the page to foreign page
- Download user's cookies for other sites

### Cross Site Scripting -- How?
- Request
- Response
- Attacker provides a link
- The victim client's browser would inerpret this response as an HTML page contaning a piece of malicious JavaScript code

### Cross Site Scripting -- Mitigation
- Don't allow any HTML to be inserted 
    - Backend libraries to strip out HTML tags
- Dont allow malicious HTML to be inserted 
    -
