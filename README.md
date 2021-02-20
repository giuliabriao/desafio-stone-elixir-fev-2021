## Hey there!

My name is *Giulia Brião*, and I'm gonna explain how to test my code.

I've made two objects to solve the problem: **Items** and **Shopping List**. The first one contains the item information like name, amount, price, and also a method to calculate the value per item (multiplying the amount by the price). Then, the second one takes the items and emails from the object Fixtures and will sum, then it divides the values so then divides it per e-mail.

Also, I've made an object called **Fixtures**, which contains not only the two main informations with pre-established data (items and emails), but also a few methods to test the corner cases of the Items and ShoppingList objects.

So, to test, in the index.html file, you can change only the arguments of the instanced **ShoppingList** (in the ShoppingList.js file) with the already created methods of the **Fixtures** object, or create some new as you wish. I  took the liberty to also wrote tests for all problematic cases (negative values, empty arrays, etc), so all you have to do is comment or uncomment to test each one of it.

Now, open the **index.html** file and the Inspect in your browser, you'll see the test in the Console tab.

That's it, I hope you enjoy my solution, have a great day! =D