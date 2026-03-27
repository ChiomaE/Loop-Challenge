# Overview

# Assumptions

Primary Users:
-Security Analysts:
-Investigate security incidents
-Audit security features

Compliance Officers
-Assess compliance risks
-Investigate compliance violations

Based on these users, I designed the applications for these use cases:
-Real time monitering of ongoing security incidents
-Assigning incidents to the necessary teams and employees
-Reviewing the amount of each type of incident & resolutions over time

# AI Usage

User Research- After reading the challenge prompt, I created a few questions that would give me the most information about the users and the most common use cases for the application. I then gave ChatGPT these questions and asked it to answer them as if they were the stakeholder. This method helped me narrow down the main users and their goals for the application, which reduced the possibility of scope creep.

Sample Data- After gathering information about the users, I asked ChatGPT to create some sample data based on their needs. With that information, I could better design the application with real use cases in mind. I did not end up using all of the sample data ChatGPT created. However, if I were to continue designing the portal, I would use that data as the basis of my design.

# Tradeoffs

During the wireframing process, I experimented with ways to make role-based features clear to the user. However, I realized that most of the features that were restricted to certain roles were unnecessary for the primary use of the portal. For example, I wanted to add a feature in the chart section of the portal that allowed executives to generate reports on the incident data. However, based on the users the portal will serve, most users will not have access to the feature. With the limited time available to me, I decided to cut the features and those similar to it.

# Reflection

To get a clear, usable MVP, I focused on the main uses of the portal- show all incidents and allow users to see the details of those incidents. Because of this, I didn't add any filtering features to the incident table. The amount of incidents in a real-time version of this portal would be cumbersome to use without filtering, especially for an enterprise-level company. If I had more time, I would implement the filtering feature in the sidebar I created on the left side of the page. The sidebar would hold the user's account information, list of incidents assigned to them (or a link to that list), and the filtering menu. Ideally, the user could save their most-used filters to the server and have them when the portal first opens. But, if they need to create a new filter, then all of the options (team, incident id and type, etc) would be available to filter and search. Then, the user would have the option to save the filter they created. 
