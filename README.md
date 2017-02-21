# Poisot Lab Manuscript Template

This template is a way to make writing academic papers using `pandoc` and
`markdown` simple.

To compile in draft mode, use `make`; to compile in preprint mode, use `make
TEMPLATE=preprint`. That's it.

## How to get it

Copy and paste the following code,

~~~ shell
wget http://poisotlab.biol.umontreal.ca/resources/plmt/repository/archive.zip?ref=master -O plmt.zip
unzip plmt.zip -d .
mv plmt-master*/* .
rm plmt.zip
rm -r plmt-master*
~~~

, then edit the `plmt.json` and `Makefile` files. Then get started.

## Is it standard markdown?

Almost. There are two differences:

1. You *need to* use `!{figure.id}`, on a single line, to determine where the figure will appear, and `?{table.id}` for tables
2. You *can* use `@id` in *CriticMarkup* to identify who wrote the comment

## What do you need?

- `pandoc` (> 1.13, if not the arrays in `YAML` won't render)
- a (relatively well furnished) LaTeX distribution
- `node` and `npm`
- GNU `make`
- an idea for a manuscript

## Plans

- do something with sideways tables

## Unknown bugs

Oh boy.
