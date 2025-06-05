# **breathe-cli**

A calming guided breathing tool in your terminal.

When you need to reset, refocus, or take a mindful moment while coding, let your terminal guide your breath.



## **How**

```
npx breathe-cli
```

*defaults to box breathing for 4 cycles



## **Usage**

By default, breathe-cli starts a short guided session with the “box breathing” technique:
 - 4 seconds inhale
 - 4 seconds hold
 - 4 seconds exhale
 - 4 seconds hold

You can customize the breathing pattern and number of cycles:

```
Usage: breathe-cli [options]

Options:
  -V, --version            output the version number
  -p, --pattern <box|478>  breathing pattern (default: "box")
  -c, --cycles <number>    number of cycles (default: "4")
  -h, --help               display help for command
```



## **Why?**

Coding can get stressful, bugs seem fleeting and evasive, and some problems seem impossible. We've all been there, rationalizing that by bashing our heads against the problem we'll figure out the missing piece. But times goes by and it's futile. The answer usually comes easier if we just take a bit of distance.

That's what I try to accomplish here. A cli tool with simple breathing exercises right then and there. No distractions, no apps, no websites, just the calming void of the terminal.

> _“Almost everything will work again if you unplug it for a few minutes, including you.”_
> — Anne Lamott

*Just breathe.*