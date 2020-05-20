### Gold Rose

## Application

Application of SOLID principles (including Single Responsibility Principle, Interface Segragation Principle and Open-Closed Principle) !

Unit tests follow-up with Jasmin !

## Topic

Hello and welcome to the Golden Rose team.

As you know, our small tavern located near an important city is run by the friendly innkeeper Allison.

We buy and sell only the best products.
Unfortunately, the quality of our goods is constantly deteriorating as they approach their expiration date.

A system has been put in place to update our inventory.
It was developed by Leeroy, a person full of common sense who has left for new adventures.

Your mission is to add new functionality to our system so that we can start selling a new type of product.

But first, let me introduce you to our system:

All items have a sellIn value, which is the number of days left to sell the item.
All items have a quality value which denotes how valuable the item is.
At the end of each day, our system decreases both values for each product.
Pretty simple, isn't it?

Wait, it gets interesting:

Once the expiration date has passed, the quality degrades twice as fast.
The quality of a product can never be negative.
"Aged Brie increases its quality as time goes by.
The quality of a product is never more than 50.
"Sulfuras", being a legendary object, has no expiration date and never loses quality.
"Backstage passes, such as Aged Brie, increase its quality as time passes (sellIn); Quality increases by 2 when 10 days or less remain and by 3 when 5 days or less remain, but the quality drops to 0 after the show.
We recently signed a partnership with a supplier of invoked product ("Conjured").
This requires an update of our system :

Conjured items are degrading twice as fast as normal items.
"Conjured" is a prefix to the name of the elements that means that you have to identify which elements are Conjured (example: "Conjured Dark Blade", "Conjured Magic Stick").

## Tests

```
git clone https://github.com/floriansr/Gold-Rose.git
```

```
cd Gold-Rose
```

```
npm install
```

```
npm test
```

## Author

-   **Florian Sueur** - _Initial work_ - (https://github.com/floriansr)
