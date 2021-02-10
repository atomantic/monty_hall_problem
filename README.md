# Monty Hall Problem

[The Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem) has plagued me for a decade. It's a problem I go back and read up on every few years and remember why it makes sense even though I can never manage to intuit why.

The short story is this: you have 3 doors. Two doors have a goat behind it, one has a car behind it. You get to choose a door. After you choose a door, the host of the game (Monty) reveals a goat behind one of the other two doors (he knows what's behind the doors and always only reveals a goat). You then have the option to change your mind and choose the remaining door. Counterintuitively, switching yields a 2/3 win where staying yields a 1/3 chance of getting the car.

In talking this over the last couple of days I found myself in a position of simultaneously believing that the probability math is correct and believing that there is something fundamentally wrong with how we model probability against reality--and specifically that this model of events and probabilities is correct:

## Reality Model 1 - Math Does Not Abide
![Faulty but intuitive view](faulty.png)

In the above, there are 3 possible distributions. When Monty reveals a goat, it collapses reality into 1 of 4 possibilities, which simplify into 50/50 odds--this is a sort of quantum entanglement view of reality--but does reality at the macro level behave as it does in the quantum world? 
- If we see that a goat is behind `Door 2`, then `Distribution B` is no longer possible (`Door 2` cannot have been allocated a car in the initial random placement).
    - If you were in distribution A, switching wins
    - If you were in distribution C, switching loses
- If we see that a goat is behind `Door 3`, then `Distribution A` is no longer possible (`Door 3` cannot have been allocated a car in the initial random placement)
    - If you were in distribution B, switching wins
    - If you were in distribution C, switching loses

It seems we have a 50/50 chance of winning whether we choose to stay with `Door 1`, or choose to switch to the other door. I couldn't see the flaw in this view of reality until I made this project and worked out the edges.

> (see below in the explanation of model 2 for the flaw in this model if you can't see it already)

This mixed view of holding the above model in mind (and finding no flaw in the argument) while believing that `math` is smarter than I am resulted in a troubling certainty that something is either fundamentally wrong with the Universe or that my brain is broken--and that maybe this kind of puzzle is a key to understanding how our reality is not mapped the way we map the sciences.
> Moreover, I now understand religion in a way I didn't before.

I didn't want to take anyone's word for it, so I coded up a program to run the probability experiment (just to double check the math). Spoiler: `the math checks out`.

After writing this repo and hammering away at a spreadsheet of possibilities and pouring over [The Wikipedia Page](https://en.wikipedia.org/wiki/Monty_Hall_problem) to try to figure out why the above model of reality is faulty, I finally drew this view of reality, which rectifies the problem:

## Reality Model 2 - The Math Abides
![Probability view](probability.png)

In the above model, you can clearly see that there are 3 possible realities (just as there are in the first model). However, now perhaps it's clearer to see that switching wins 2/3 times. 

The flaw in Model 1 that isn't super obvious is that landing in Distribution C has a 1/3 chance of happening, while landing in A or B has a 2/3 chance of happening. Both A and B distributions favor switching.

To further clarify, for the continued objections of my buddy who thinks this is all a trick of the math, the goat reveal was done from the set of `Door 2` + `Door 3`, not from `Door 1` -- so the other door holds 2x the value of the first chosen door that wasn't part of the goat reveal. If you don't know how the goat door choice was made, you don't know which door holds a 1/3 value and which has a 2/3 value, but knowing doesn't change the values of the doors (just your advantage).

My buddy further argues that if you start with 3 doors, with one of them revealed as a goat, you have a 50/50 chance of picking the right door (because each door is 50% of the choice options)--however, this is only true if the distribution of the remaining goat and car are done equally random between the two remaining closed doors. If the distribution was made across all 3 doors prior to the goat reveal AND the goat reveal was made with the consideration of 2 of the 3 doors, then the door that was part of the consideration of the goat reveal has 2/3 of the car probability.

# The Code

This repo contains a simple bit of code to run the probability of winning with a switching vs staying strategy.

Here is an example output:

```
ran 1000000 iterations of each experiment
switching: 665765 wins, 334235 losses, (0.665765)
staying: 333466 wins, 666534 losses, (0.333466)
```

Run yourself by cloning this repo, navigating into the directory and running the following (assuming you have [Node.js](https://nodejs.org/en/) installed)

```
npm i
node .
```

# About

Adam is this guy who thinks he's real but he might not be: https://twitter.com/antic
https://adameivy.com