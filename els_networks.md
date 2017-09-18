# Introduction

In ecological communities, interactions between species are organized in ways
that are non-random. The organisation of these interactions, in turn, drives or
changes some properties of the community, such as its stability, productivity,
or ability to resist extinctions. The way interactions are organized can be
studied by investigating the structure of *Species Interaction Networks*. In
this representations, species are "nodes", and interactions are "edges". Two
species are linked by an edge if there is an interaction between them.

Describing and understanding the structure of species interaction networks is an
active, and growing, field of ecological research. In this contribution, we will
give an overview of some of the most prominent findings and areas of research
from the last decade. Starting from a discussion of some invariant properties of
the structure of species interaction networks, we will then discuss how this
structure affects ecological properties. We will follow by a discussion of the
ways ecological networks can be studied under familiar concepts from ecological
theory, and finally how this approach scales up to larger temporal or spatial
scales.

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
number of species ($S$) raised to some exponent, or $L \propto S^k$. @mart92ccc
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

Thanks to phylogeny, a key determinant of ecological network structure, it is
possible to understand why ecological networks have the structure we observe (species position and interactions).
Phylogenetically close species inherit traits from their common ancestors (*e.g.*
body size, habitat, defensive strategy, metabolic type, phenology), increasing
their propensity to interact with the same group of species or with similar
species. This conservatism of interactions has been found to hold across
different types of interactions such as antagonistic or mutualistic interactions
[*ref*]. However, every species role, such as host or parasite in antagonistic
interaction, prey or predator in food web and plant or pollinator/seed disperser
in mutualistic interaction, do not provide the same links structure. For
instance, closely related host tend to share parasites, while closely related
parasites, because of competition for resources, tend to have different hosts species
[*ref*]. The conservatism of interactions is consequently unequal all over the
network. Following the logic that closely related species interact with the same
group of species, @reze09cmf shown that phylogenetic structure of ecological
networks explains almost entirely the formation and composition of modules in
the network, and the connections between them [*ref*]. For the same reasons that
conservatism of interactions is asymmetrical, the link between phylogenetic
signal and module composition is different depending on the species role
[*ref*], and species that are modules connector are usually phylogenetically
close. @catt04pca also found, using a niche-hierarchic model, that diet is
constrained by the phylogenetic origin of consumers. The nested structure of
trophic networks, generated by the diet structuration, is then influenced by the
phylogenetic signal of interacting species and the compatibility of their traits. In contrast, the
nested structure of mutualistic networks would be a consequence of trait
complementary between species [*ref*]. For now, mechanisms underlying the
nestedness-phylogeny relationship remain to be further investigated. Moreover,
because of species plasticity, phylogeny alone does not fully the structure and
evolution of ecological networks.

# From structure to properties

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

The relationship between ecological network structure and stability remains a
main topic of discussion. First, @maca55fap and @elto58rc observed in natural
ecosystems that diverse communities have a more stable dynamic than simple ones.
Using a mathematical model based on random ecological networks, @may72wlc
undermined this hypothesis. Taking into account not only species diversity but
also the connectance and the interaction strengths in the network, he found
that, contrarily to the way of thinking at this time, diversity was
destabilizing communities. This kick in the anthill was the beginning of a
prolific complexity-stability debate, highly oriented on trophic networks
[see @alle15sra; @mcca00dd]. Two different approaches of the stability have emerged: one based
on the general complexity-stability relationship and dynamics among species in
communities and the second one based on the communities ability to resist biotic
and abiotic changes. The both use different notions and
definitions of stability, inducing different ways to study it [see @mcca11fwm].
Despite their dissimilarities, these approaches are not totally independent and
have allowed highlighting that species diversity has no direct influence on
communities stability. However, the structure of ecological network such as interactions distribution and strength seems to play a crucial role [@yodz81sre]. The links distribution of ecological
networks follows a power-law distribution [*ref*], meaning that few species are highly
connected to the rest of the community and a large number of species are weakly
connected to others. This organization combined with the myriad of weak
interactions found across ecological networks, called the weak interaction
effect [*ref*], buffers species variations and then stabilizes the entire
community [@basc05isc; @jacq16ncr]. Other parameters, such as the predator-prey
body-mass ratio [@emme04pbs; @bros06cbr] or network architecture [@mont06ent; @theb10sec],
determine the distribution and strength of interactions and then contribute to
the stability of ecological networks.

Perturbations in ecological communities, generally caused by landscape
fragmentation, habitat loss, species loss or invasion, induce a decrease of
species diversity. This loss of diversity is explained by extinctions of species
due directly or indirectly to a first species loss (*i.e.* secondary extinctions
or cascade of extinctions). These extinctions are used to measure the
robustness of ecological communities and to explore what happen when a species
is removed or changed in a network. The use of dynamic-based models led to
highlight the fact that the probability of secondary extinctions increases with
the community size [@lund00sll], and decreases with the network connectance
[@dunn02nsb]. Then, the focus on species removal have allowed to understand that
the loss of an highly connected species, also called hub, induces a higher rate of
secondary extinctions than the loss of a random, weakly connected species
[@sole01cfe]. However, even if a species is weakly directly connected, if it
represents a highway of energy-flow in the network (carbon, nitrogen or
biomass), its loss will have similar impact in term of secondary extinctions
than the loss of an hug [@alle04wdw]. The network architecture also affects the
community response to perturbations. For instance, thanks to their structural
properties (hight nestedness and connectance [@jord03ipc]), mutualistic networks
persist longer than randomly structured networks [@memm04tp ; @fort06hls]. On
the other hand, presence of modules in the community structure limits
propagation of perturbations across the rest of the network and then secondary
extinctions [@stou10ufp].

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

The realization of an interaction between individuals from the same or
different populations within a community also have ecological consequences
as it modifies the dynamics of at least one of the interacting populations,
and through it, the ecosystem emerging properties. If we consider for
instance a population A, its dynamics is not the same when it multiplies
in isolation -- where it can grow exponentially if resources are unlimited
[@malt98epp] or logistically otherwise [@verh38nlq] -- or when it is embedded
in a real-world community, composed of several species interacting with one
another through different mechanisms [@ches08ipc]. It can lose individuals to
predation, have parasitism increase its death rate and at the same time see
its establishment eased through facilitation. It then becomes necessary to
account for interactions when studying the dynamic a population, community
stability or ecosystem functioning. But the effect of interactions on
populations dynamics is not always the straightforward, both in terms of
directionality and intensity, as it exists different types of interactions and
multiple factors influence their probability and strength. Since the seminal
work of @may72wlc, the analysis of these effects has been a prolific field
of ecology, feeding in particular the famous "complexity-stability debate"
(see @alle15sra for an overview). Including interactions in population dynamics
analyses can be done by using model of the following general form [@pois15swe]:

$$
\frac{1}{N_i}\frac{\text{d}}{\text{d}t}N_i = r_i \times \sum_j A_{ij} \alpha_{i,j} N_j \,
$$

wherein the adjacency matrix $A$ ($n*n$), list the realized interactions in a
given community composed of $n$ species. $A_{ij} \neq 0$ when species $i$ and
$j$ interact and $0$ otherwise. $\alpha_{ij}$ quantifies the strength of the
interaction. We presented here an equation to model populations abundance $N$
but it can easily be adapted to model biomass flows by replacing populations'
abundances by their biomasses $B_i$ (see for instance @will07hyi).

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

# From the regional species pool to local structured communities

Describing the different local communities that occur at macroecological scales
through their ecological networks represent an additional layer of information
compared to simple species lists. As such, ecological networks are a powerful
tool to shed new light on the processes underlying species distribution
[@caze16tsc]. Until recently, the prevailing idea was that at large scales, the
role of biotic interactions was minimized compared to that of abiotic
conditions, and thought to only be important locally [@pear03pic; @boul12adb].
Empirical observations of species-environment relationship were thus used to
understand species physiological tolerance to environmental conditions [**ref**]
and potentially predict their range under different scenarios of climate change
[e.g. @arau06cwd]. While these climate envelope models provide a useful
approximation of species potential distribution [@pear02sse], there is mounting
evidences that biotic interactions -- both positive and negative -- play a
critical role in shaping communities not only at local scales [@boul12adb], but
also at macroecological scales [@davi98isr; @arau07ibi; @gote10mss; @heik07bii;
@arau11usc]. So far, the role of interactions in shaping species distribution is
mainly estimated from co-occurrence data, used to build joint species
distribution models (JSDM) [@poll14ucm]. But there are limitations to this
approach. For instance, it does not allow to distinguish between co-occurrence
caused by biotic interactions and correlated responses to unmeasured
environmental variables [@poll14ucm]. Conversely, the lack of association
between species is no evidence of absence of interaction [@caze16tsc]. To move
from empirical-based species distribution models (SDM) toward theory-driven SDM,
further work is needed. In particular, developping methods allowing to include
prior information about the underlying ecological network when building
(J)SDMcould help sheding light on the the fundamental processes underlying
species distribution and thus making more acurate predictions [@caze16tsc].
Additionnaly, @pois17hpt recently showed that biotic interactions respond to
environmental conditions on their own, independantly of species. **(needs conclusion / transition)**

Ecological networks also offer an ideal framework to study the conditions for
the maintenance of biodiversity in communities through species coexistence.
@gaus34eav predicted that species that shared similar ecologies could not live
together in the same area. This competitive exclusion principle states that the
the strongest competitor will eventually come to dominate the other species and
drive them to local extinction. This stands in contradiction with the existence
of ecological communities containing species that overlap in some extent in
their resources or consumers. Phytoplanktonic communities are a paradigmatic
example of this paradox [@hutc61pp], as they exhibit a high biodiversity while
species are competing for a limited number of shared ressources (e.g. light,
nitrate). The use of consumer-resources models has allowed to highlight some
mechanisms improving species coexistence [@ches00mms]. These mechanisms are
based on species traits that eighter decrease fitness differences (equalizing
mechanisms) and/or increase niche differentiation between species (stabilizing
mechanisms). The coupling of this type of model with the representation of
ecological communities as their underlying network of interactions has brought
new perspective on species coexistence, as it is allowing to integrate these
mechanisms in large realistic communities. Using this methodological framework,
@mart06dcp showed that the global non-random structure of the food webs improved
community persistence. The distribution of motifs in food webs [@stou10ufp, see
section "Invariants in ecological networks"] as well as species' role within motifs [@stou12ecs] are related to
community persistence. In mutualistic networks, the nested structure has been
shown to minimize competition relatively to competition [@bast09amn;
@sugi09csc]. In these networks, the asymetry of dependances -- the fact that
when one species $A$ depends strongly on another species $B$ as resource for
food or pollination, the other species ($B$) only weakly depends on $A$ -- also
increase persistence [@basc06acn]. This type of approach also allowed to
highlight the interplay between traits and structure. As an example, @bros06ase
showed that the allometric scaling of metabolic rates of species improve
community persistence when the organization of the food webs is such that
predator–prey body mass ratios are different from zero.

Environmental filters and community dynamics lead to a subgroup of
the regional species pool in a community. However, community composition can
vary across similar habitats. To explain these variations, several assembly
rules have been described, such as constant body-mass ratios or guild
proportionality [*ref*]. The assembly rule of @diam75asc remains the most
influent, introducing competition among species as a core driver of non-random
species co-occurrences, especially by permitted and forbidden interactions.
Since then, other components have been found to be strong determinants of
communities' assembly. For example, differences in community composition are due
to different arrival order of species, and especially underlying the importance
of the first arrived species [@drak91cms]. The arrival history plays an
important role in the community composition when multiple stable states are
possible [@chas03caw]. However, when a unique stable state is possible,
communities' assembly tend to be similar when the regional species pool is the
same, independently to assembly history [@capi09sme]. Dispersion,
interaction strength and phylogeny distance between species that compose
communities are also drivers of community assembly [@leib17caf; @kraf07tec;
@mahe07ipf; @mont03tpf]. Based on these assumptions, two distinct, but
complementary, types of models have been developed to predict community assembly
dynamics [@tilm04ntn; @grav06rnn; @souz16qca]. Niche-based theory models use
coexistence theory and niche differentiation. These processes explain assembly
mechanisms at large scale (*e.g.* metacommunity level). Conversely, neutral
theory models are based on species dynamics (migration, extinction and
speciation) under stochastic processes, which allow to explain dynamics at fine
scale (*e.g.* phylogenetic level) [*ref*].

# Conclusion

# Glossary

Adjacency matrix: square matrix representing species interactions. If two
species $i$ and $j$ interact, the intersection of the matrix at ${i,j}$ will be
1, and  if no interaction.

*Allometric scaling*

Assembly rules: Ecological processes that lead to a specific species' composition
of a community, *e.g.* competition, predator-prey interactions, arrival history, etc.

*Bioenergetics*

Ecological interactions
: Every type of contact between two species that alters the abundance, biomass
and/or behavior of one or both species. Interactions can be trophic,
mutualistic or antagonistic, directed or undirected, weighted or unweighted.

Ecosystem functioning: Biotic and abiotic processes that regulate ecosystem,
allowing energy and matter flux between trophic levels and between ecosystems,
*e.g.* biogeochemical cycles.

Graph theory: Mathematical framework used to model the relationship between the
objects of a network

Network structure: General shape of a network. It is commonly measured using
connectance, link distribution, general architecture (nestedness and
modularity), etc.

Nodes/Links, Vertices/Edges: Following graph theory, species are represented as
nodes (or vertices), and interactions between them are represented by links (or edges).

Phylogenetic signal: tendency of phylogenetically close species to have similar traits.

# References
