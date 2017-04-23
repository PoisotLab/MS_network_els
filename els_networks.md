# Introduction

- definition
- domains + questions
- other uses of networks
    - epidemiology
    - animal societies
    - landscape connectivity

# Invariants in ecological networks

One striking particularity of ecological networks is their consistency:
even though the depict interactions between different organisms across all
sorts of ecosystems, they all tend to look the same [@jord03ipc]. Remarkably,
even when interactions among species themselves vary (see section **x**),
the overall network structure tends to remain unchanged [@kemp17ian]. Most
ecological networks have a very specific degree distribution [@will11bmc],
whereby most species have a small number of interactions, and a small
proportions of species have a large number of interactions. In food webs,
which represent interactions between preys and their predators, there is a
well-described relationship between the number of species and the number of
interactions: the number of interactions ($L$) increases proportionally to the
number of species ($L$) raised to some exponent, or $L \propto S^k$. @mart92ccc
suggested that this exponent is approximately equal to 2, *i.e.* the number
of interactions is proportional to the squared number of species. @bros04uss
show that this general relationship holds even across space: it is possible
to estimate how many interactions a species will establish across its entire
range. In some other instances, networks may differ on some aspect of their
structure, despite obeying to a shared underlying principle. For example,
@fort10nme show that in networks with a low connectance, nestedness (the
degree to which the diet of specialists and generalists overlaps) and
modularity (the tendency of species to form densely aggregated clusters)
are positively correlated. In networks with higher connectance, this became
the opposite: networks with a large number of interactions were either nested
(and not modular) or modular (and not nested). In the recent years, it emerged
that many aspects of network structure covary with connectance [@chag15cte;
@pois14wen]: this suggests that simply knowing how many species there are,
and how many interactions they establish, is already very informative about
the network structure.

Another remarkable generality of network structure is the distribution of
particular shapes of interconnection between all three-species subsets.
@milo02nms indeed found that networks (not just ecological but other types of
networks such as neuronal or electronical networks as well) can be characterized
by the over-representation of some of these three-species subset, which they
called motifs. Motifs can be more broadly defined as being particular shapes of
interconnection between three or more nodes in networks at a frequency
significantly higher than those find in randomized networks. Three-species
motifs thus represent the simplest building blocks of networks, and more
importantly the typical interaction found in communities. As such, they offer
the possibility to integrate theories developped on simple modules (*e.g.*
omnivory, @mcca98wti, @holt97cm) in larger, more realistic networks. For
instance, food webs are characterized by an over-representation of linear food
chains and omnivory and an under-representation of apparent and exploitative
competition [@cama07qal; @basc05stm]. @stou10ufp found that this distribution
promotes stability in food webs, with over-represented motifs being more stable
in isolation and correlated with higher stability in large realistic
communities, and conversely. Motifs can also be used to characterize species
role in networks. From the 13 different three-species motifs emerge 30 uniques
positions for species to occupy in these motifs, representing how the species is
embedded in its community. The different positions a species will occupy, and
the frequency with which it will occupy these different positions in networks
are called species motif role (@stou12ecs). These roles have been shown to be
evolutionnary conserved in food webs (@stou12ecs) and to have less variability
in time than expected in host-parasitoids bipartite networks (@bake15srf).

- evo/phylogenetic structure **MB**
    - @eklo12reh => network structure effect on evolutionary history

# From structure to properties

- perturbations/extinctions **MB**

The consequences of the erosion of biodiversity for ecosystem functioning has
been for almost three decades a central problematic for ecologists. While the
hypothesis that an increase in species diversity results in an increased
productivity dates back to Darwin [@darw59osm], the emergence of experimental
ecology and the shift from observation in natural systems to the quantification
of ecology has made possible to develop a quite general theory for what is now
called the BEF relationship. In a trophic group (i.e. a group of species that
all belong to the same trophic level, e.g. producers or herbivores), the loss of
diversity resuts in a loss of efficiency to capture the shared resource
compartment [@lore10lbe] (e.g. nutrients for producers, or producers for
herbivores). This leading to a decrease in productivity or other index of
functioning. Yet, when the trophic group under focus is coupled to other(s), the
action of diversity on functioning is more variable [@duff07frb]. Top-down and
bottom-up controls are exemple of mechanisms that modifies the action of the
diversity at one level on other(s). This makes the BEF relationship
unpredictable in real-world communities, composed of several trophic groups that
are virtually never differentiable -- as intraguild predation and omnivory blurr
the frontier between levels. The multiplicity of the factors influencing the BEF
relationship calls for a more general framework that allows the integration of
the theories developped for trophic group and for simple modules or sub-systems.
By mapping transfer of biomass and energy and/or constraints on organism through
the different compartments that compose a natural community ecological, networks --
and food webs in particular -- offer the possibility to perform this
integration, reconciling at the same time ecosystem ecology and population
ecology. Anlyses performed on simulated food-webs with unchanged diversity have
shown that interactions, and more specifically their structure, have a
significative influence on functioning [@theb03fcb; @theb07cee; @pois13tcd]. The
structure of interactions indeed translates the distribution of different types
of properties important for ecosystem functioning, such as the presence of
omnivory, the generality of species, the modularity of the food-web, etc.

- stability **MB**
    - @jacq16ncr

# Linking interactions to ecological mechanisms

It is worth remembering that ecological interactions are the direct
expression of ecological mechanisms. A pollinator is able to effectively
reach the nectar in a plant because the traits of the two organisms match,
because they have compatible phenologies, and because they occur in the same
environment. A virus can infect its host because it is able to attach to the
cell surface, effectively penetrate it, and hijack the cellular machinery
to its benefit. Interactions that are not allowed because trait values do
not match have been called "forbidden links" [@oles11mfl]. This prompted
a search for "linkage rules" [@bart13ulr] in ecological networks, *i.e.*
the relationships that must exist between traits borne by two organisms
in order for an interaction between them to exist. These can be identified
from existing data on traits and interactions [@bart16cfi], and then used
to generate realistic ecological networks [@crea15nme]. @gonz16llf point out
that interactions are happening between individuals: this requires to consider
how the traits are distributed at the individual scale, but also how different
behaviors may allow organisms to overcome some of the forbidden links. Although
traits are an important part of what makes interactions happen, they are only
relevant insofar as the organisms are able to encounter one another. The
importance of neutral dynamics (*i.e.* how abundances of different species
can determine the probability that they can interact, based on how often they
would bump into one another by chance) is, somewhat counter-intuitively,
great. @cana12esp reveals that simulating food web dynamics by using only
population abundances to predict interactions yields realistic food webs. In
a host-parasite system, local abundances has also been identified as a
key predictor of species interactions [@cana14een]. Speaking more broadly,
because interactions emerge from all of these ecological mechanisms, there
is a need to develop a deeper understanding of them [@pois15swe]. Beyond
the fundamental advance that this represents, this would allow to predict
interactions based on external information [@mora15ibi].

- interactions => populations and biomass dynamics **ED**

Ecological networks are also spatially and temporally variable
[@troj16enm]. There are two drivers to this variability: changes in
species composition, and changes in the way these species interact
[@pois12dsi]. Changes in species alone are able to generate variation in
network properties [@have92ssn]. Spatial variation in network structure can
also reflect deep-time constraints; for example, @dals13hci reveal that
historical climate change trends have a signature on the nestedness and
modularity of pollination networks. Even when the same species are present,
interactions between them can vary. @cars14bdp and @troj15gvm investigated
this phenomenon in mutualistic networks. Interaction turnover results from
variations in partner fidelity (some species pairs are extremely closely
associated), but also from variations in the local environment in which the
species interact. Interestingly, and as mentioned in section **x**, networks
overwhelmingly tend to conserve their structure even when interactions
within them change. @diaz10cmn surveyed a pollination network over 10 years,
and found important species turnover during this period. Nevertheless,
the network retained its structure because species where replaced by their
functional equivalent; a generalist pollinator often succeeded to another
generalist pollinator. Conversely, species tend to retain their role in
different communities: @bake15srf show that species keep occupying the same
position in the network across space, regardless of the species they interact
with at every location.

# Section 4

- distributions and species interactions
    - Cazelles
    - Araujo
    - Lessard geographic species pool
- ???
- ???

# Conclusion

# References
