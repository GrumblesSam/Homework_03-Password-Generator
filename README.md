# Homework_03-Password-Generator

## Description
This a simple random password generator using javascript and window properties.
Given the base code all that was required of us was to provide the user with prompts, log them, and then generate the password.

## Process
I went down the list of acceptance criteria and started. First i created a function that prompted the user for a legth they would like for their password, and would redirect the user to try again if the password length did not fall between the criteria of 8 and 128. Next, the second function was designed to provide the user with several prompts for the type of characters they would like to use. Those prompts would then be logged and the charcter sets would be joined to create an array that would be used to generate the password.Finally, the last function ran the first two and checked if they returned an undefined value (if so the program quit), and then using javascript math functions, used a random number generator in a loop to determin a random index to pick a character and create the password.