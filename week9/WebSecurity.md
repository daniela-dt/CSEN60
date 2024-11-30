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
- Similar techniquers may be used to protect against SQL injection

### Distributed Denial of Service
- DDoS
- Overwhelm a server wiyh a malicious requests to block regular users
- Requests don't come from 1 machine
- Attacker uses a number of controlled machines, often compormised (hard to spot)
### Network Security 
- Need to send requests: GET / POST
- Need to send responses: HTML documents
- Network channels aren't necessarily secure
- Confidentiality: What if someone intercepts and reads this message?
- Integrity: What if someone intercepts and alters this message?

### Secure Communication
- For anyone other than the intended recipient, we want our message to be...
    - Unreadable
    - Impossible to change without detection
- Encryption function
    - f(x)=y (easy to compute)
    - f^(-1)(y)= x (difficult to compute)
### Encryption & Decryption
#### Encryption
- Ensures privcay within an organization and on the Internet
- The conversion of data into and unreadable form, called ciphertext

#### Encryption Types
- 2 types:
    - Symmetric-key Encryption
    - Asymmetric-key Encryption
#### Decryption
- The process of converting the ciphertect back into its original form

### Secure Sockets Layer
- Uses both encryption types
- Provides for secure transmission of data on the Internet 
- A protocol that allows data to be privately exchanged over public network 
- Developed by Netscape
- Encrypts data sent between a client and a web server
- Browsers usually display a lock icon
- SSL provides secure communication between a client and server by using
    - server and client digital ceritificates for authentication 
    - cryptography using a "session key" for bulk encryption

### Symmetric-Key
- Also called single-key encryption
- Both encryption and decryption uses the same key
- Both the sender and receiver must know the key before communication through encryption

### Asymmetric-key 
- Public- key encryptions
- No shared secret
- 2 keys are created (Public & Private key)
- much slower that symmetric-key encryption 

### Asymmetric vs. Symmetric Key
#### - Symmetric Key
    - Requires sender, receiver know shared secret key
#### - Asymmetric Key
    - Sender, receiver do not share secret key 
