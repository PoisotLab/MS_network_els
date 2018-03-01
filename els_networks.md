# Introduction

Interactions between components of ecological systems, such as species in a community, (*e.g.* species) are organized non-randomly and constrained by
sets of rules (see section X). The organization of these interactions drives
some properties of the community such as stability, productivity, and the ability to
resist extinctions, all of which eventually feedback on the system organization.
The constant interplay between the organization of interactions and system dynamics
constrains its structure. Studying the structure of
ecological systems is necessary to gain insights on the fundamental rules and
processes that govern ecosystem formation, maintenance and functioning.

The organization of interactions in a community is best represented as a network. *Graph theory* is a field of mathematics developped to analyze the structure of such systems. Every community can be abstracted by a
*graph*, a representation of the system components and their arrangement(*Figure 1a*).
These components are called *nodes* and are linked together by *edges*. In an ecological system,
nodes can be individuals, populations, communities or landscape patches and
edges can represent trophic links, energetic flux, etc, every kind of
interaction. Both nodes and edges can carry additional information such as
weight (*e.g.* species abundance, intensity of the gene flow between two
populations, etc.), location in space and time, and
nodes labels (*e.g.* species identity). Specific informations can be attached to
edges, modifying the characteristics of the graph. Graphs can be *directed*
(*i.e* interaction goes from A to B) or *undirected*, *weighted* (*i.e*
different strength of interaction among the network) or *unweighted* (*Figures 1
and 2*). This information is summarized in the *adjacency matrix*
(typically named $A$, see definition in glossary) (*Figure 1b*). In this chapter, for
simplicity, we will focus mostly on *Species Interaction
Networks* (SIN). Ecological systems such as landscape, genetic or nutrient
networks are not represented here, but they can be studying using the same
framework defined further [*ref*].

Describing and understanding the structure of species interaction networks is an
active, and growing, field of ecological research. In this contribution, we will
give an overview of some of the most prominent findings and areas of research
from the last decade. Starting from a discussion of some invariant properties of
the structure of species interaction networks, we will then discuss how this
structure affects community dynamics and properties. We will follow by a discussion of the
ways ecological networks can be studied under familiar concepts from ecological
theory, and finally how this approach scales up to larger temporal and spatial
scales.

![Graphical representation of an ecological network (a), where species are represented by circles and their directed interactions by arrows. The representation is formalized in the adjacency matrix (b). In an unipartite representation as this one, each species is represented both as a column and a row. 1 indicates an interaction between two species (e.g. the green square in (b)), and 0 indicates the absence of interaction. This matrix facilitates computation of characteristics such as the connectance (c) and the degree distribution (d). (c) represents the level of connection into the network and is calculated as shown in the figure. (d) represents the distribution of interaction per species. The circles size is relative to the amount of interactions a species have (d1). This distribution is non-random and generally follows a power-law distribution (d2). The network can be split into subnets composed of 3 species, called motif (e). Among the 13 different possible motifs, we only represented the most commonly found in natural communities.](Figures/figure1.pdf)

# Invariants in ecological networks

One striking particularity of ecological networks is their consistency:
even though they depict interactions between different organisms across all
sorts of ecosystems, they all tend to look the same [@jord03ipc]. Remarkably,
even when interactions among species themselves vary (see section **x**),
the overall network structure tends to remain unchanged [@kemp17ian]. Most
ecological networks have a very specific degree distribution [@will11bmc] (*Figure 1d*),
whereby most species have a small number of interactions, and a small
proportions of species have a large number of interactions. In food webs,
which represent interactions between preys and their predators, there is a
well-described relationship between the number of species and the number of
interactions. The number of interactions ($L$) increases proportionally to the
number of species ($S$) raised to some exponent, or $L \propto S^k$. @mart92ccc
suggested that this exponent is approximately equal to 2, *i.e.* the number
of interactions is proportional to the squared number of species. @bros04uss
shown that this general relationship holds even across space; it is possible
to estimate how many interactions a species will establish across its entire
range. In some other instances, networks may differ on some aspect of their
structure, despite obeying to a shared underlying principle. For example,
@fort10nme show that in networks with a low connectance (*Figure 1c*), nestedness (the
degree to which the diet of specialists and generalists overlaps -- *Figure 2*) and
modularity (the tendency of species to form densely aggregated clusters -- *Figure 2*)
are positively correlated. In networks with higher connectance, this becomes
the opposite: networks with a large number of interactions are either nested
(and not modular) or modular (and not nested). In the recent years, it emerged
that many aspects of network structure covary with connectance [@chag15cte;
@pois14wen], suggesting that simply knowing how many species there are,
and how many interactions they establish, is already very informative about
the network structure.

![Network topology, example of a fictional plant-pollinator network. (a) shows a perfectly nested network, where specialists pollinators are visiting plants embedded into the diet of more generalist pollinators. (b) shows a perfectly modular network, where sub-groups of species interact more strongly with each over than with the rest of the network. (c) shows a random network. Two representations are possibles. Top: Bipartite representation using nodes and edges ; Bottom: Ordered interaction matrix. Here, we used striped yellow squares instead of 1 for presence of interaction and empty squares in absence of interaction.](Figures/figure2.pdf)

Another remarkable generality of network structure is the distribution of
particular interconnection between three-species subsets. @milo02nms
found that networks (not just ecological but other types of networks such as
neuronal or electronical networks as well) can be characterized by the over or
under representation of some of these three-species subset, which they called
motifs (*Figure 1e*). Motifs can be more broadly defined as specific
shapes of interconnection between three or more nodes in networks. The frequency at which they occur in a network can be computed and compared to randomized networks in order to reveal significant aspects of structure. Three-species
motifs represent the simplest building blocks of networks, and more importantly
typical interaction modules found in communities. As such, they offer the
possibility to integrate and test theories developed on with simple models (*e.g.*
omnivory, @mcca98wti, @holt97cm) in larger, more realistic networks. Food webs,
for example, are characterized by an over representation of linear food chains
and omnivory and an under representation of apparent and exploitative
competition [@cama07qal; @basc05stm]. @stou10ufp found that this distribution
promotes stability in food webs, with over-represented motifs being more stable
in isolation and correlated with higher stability in large realistic
communities, and conversely. Motifs can also be used to characterize species
role in networks. From the 13 different three-species motifs emerge 30 unique
positions for species to occupy in these motifs, representing how the species is
embedded in its community. The different positions a species will occupy, and
the frequency with which it will occupy these different positions in networks
are called species motif role [@stou12ecs]. These roles have been shown to be
evolutionary conserved in food webs [@stou12ecs] and to have less variability in
time than expected in host-parasitoids bipartite networks [@bake15srf].

Another invariant network property relates to evolutionary history. Phylogeny is a key
determinant of ecological network structure, being related to
species position and interactions into the community. Phylogenetically close
species indeed inherit traits from their common ancestors (*e.g.* body size, habitat,
defensive strategy, metabolic type, phenology), increasing their propensity to
interact with the same group of species or with similar species. This
conservatism of interactions has been found to hold across different types of
interactions such as antagonistic or mutualistic interactions [@font15cce].
DG: JE NE COMPRENDS PAS LA PHRASE SUIVANTE
However,
every species role, such as host or parasite in antagonistic interaction, prey
or predator in food web and plant or pollinator/seed disperser in mutualistic
interaction, do not provide the same links structure.
For instance, closely
related hosts tend to share parasites, while closely related parasites, because
of competition for resources, tend to have different hosts [@kras12psm]. The
conservatism of interactions is consequently unequal all over the network.
Following the logic that closely related species interact with the same group of
species, @reze09cmf shown that phylogenetic structure of ecological networks
explains almost entirely the formation and composition of modules and the connections between them. For the same reasons that
conservatism of interactions is asymmetrical, the link between phylogenetic
signal and module composition is different depending on the species role
[@kras12psm], and species that are modules connector are usually phylogenetically
close. @catt04pca also found, using a niche-hierarchic model, that diet is
constrained by the phylogenetic origin of consumers. The nested structure of
trophic networks, generated by the diet structuration, is then influenced by the
phylogenetic signal of interacting species and the compatibility of their
traits. In contrast, the nested structure of mutualistic networks would be a
consequence of trait complementary between species [@reze07epc]. For now, mechanisms
underlying the nestedness-phylogeny relationship remain to be further
investigated. Moreover, because of species plasticity, phylogeny alone does not
fully explain the structure and evolution of ecological networks.

# From structure to properties

The relationship between ecological network structure and stability is a long-lasting object of discussion. @maca55fap and @elto58rc first proposed that diverse communities should have a more stable dynamic than simple ones because disturbances are more easily spread through highly connected nodes.
@may72wlc countered this hypothesis using a mathematical model based on random ecological networks and proposed there should be a limit to ecosystem complexity. This counter-intuitive proposition sparkled live debates still lasting today
[see @alle15sra; @mcca00dd]. Two different approaches to the problem followed: one focused on dynamical stability and the other on the
resistance of communities to changes in the environment.
Despite their dissimilarities, these approaches are not totally independent and
revealed that species diversity has no direct influence on
community stability. However, the structure of ecological network such as
the distribution of interaction strength and network topology seems to play a crucial role
[@yodz81sre]. As mentionned above, the degree distribution of ecological networks often follows a power-law
distribution [@mont02swp], indicating that few species are highly connected to the
rest of the community and a large number of species are weakly connected to
others. This organization combined with the myriad of weak interactions found
across ecological networks buffers
species variations and stabilizes the entire community
[@basc05isc; @jacq16ncr]. Other aspects of community structure, such as the predator-prey body-mass
ratio [@emme04pbs; @bros06cbr] and network architecture [@mont06ent; @theb10sec],
determine the distribution and strength of interactions and together drive
the stability of ecological networks [@jacq16ncr].

Perturbations in ecological communities such as landscape
fragmentation, habitat loss, or species invasion, are the primary drivers of species loss. Extinctions may happen directly, for instance if a particular habitat is eliminated, or indirectly following a first species loss (a phenomenon refered as secondary extinction or cascades). Such extinctions are used to measure the robustness of ecological communities. Simulation experiments revealed that the likelihood of secondary extinctions increases with community size [@lund08sll], decreases with network connectance
[@dunn02nsb] and primarily affects the most isolated species in the network. The loss of an highly connected species, also called a hub, induces a higher rate of secondary extinctions than the loss of a random and weakly connected species [@sole01cfe]. Similarly, species responsible for important energy-flow in the network (carbon, nitrogen or
biomass) can trigger secondary extinctions [@alle04wdw].

The network architecture also affects the community response to perturbations. In agreement with Macarthur's intuition, it was found that species with low degree also more strongly propagate  perturbations following permanent changes in the environment because of their tight connections [MONTOYA2009]. Alternatively, the most connected species (hubs) diffuse such perturbations through the network and even though they affect more species, their average effect on other ones is much smaller. Overall network properties also affect the response to perturbation. Thanks to their structural
properties (hight nestedness and connectance, @jord03ipc), mutualistic networks
persist longer than randomly structured networks [@memm04tpn ; @fort06hls]. On
the other hand, presence of modules in the community structure limits
propagation of perturbations across the rest of the network and, as such,  secondary extinctions [@stou10ufp].

Eluding the consequences of biodiversity lost for ecosystem functioning has
been  a central problem for ecologists over the last three decades. The
hypothesis that an increase in species diversity results in an increased
productivity dates back to Darwin [@darw59osm] and a formal theory for what is now
called the biodiversity-ecosystem functioning (BEF) relationship was proposed in the mid 90s. In a trophic
group (*i.e.* a group of species that all belong to the same trophic level,
*e.g.* producers or herbivores), increasing diversity improves resource use efficiency and translates into larger productivity [@lore10lbe] (*e.g.*
nutrients for producers, or producers for herbivores). Yet, when the trophic
group under focus is coupled to other(s), the action of diversity on functioning
is more variable [@duff07frb]. This makes the BEF relationship unpredictable in
real-world communities [@harv13], composed of several trophic groups that are virtually
never differentiable -- as intraguild predation and omnivory blurr the frontier
between levels. The multiplicity of the factors influencing the BEF relationship
calls for a more general framework that allows the integration of the theories
developped for trophic group and for simple modules or sub-systems [@grave16phi]. By mapping
transfer of biomass and energy and/or constraints on organism through the
different compartments that compose a natural community, ecological networks --
and food webs in particular -- offer the possibility to perform this
integration. Analyses performed on simulated food-webs with fixed species richness
have shown that interactions, and more specifically their structure,
have a significative influence on productivity [@theb03fcb; @theb07cee;
@pois13tcd]. The structure of interactions translates the distribution of
different types of properties important for ecosystem functioning, such as the
presence of omnivory, the generality of species, the modularity of the food-web,
etc.
DG: je ne comprends pas la dernière phrase

# Mechanisms underlying pairwise interactions

Ecological interactions should be viewed as the result of lower level processes impacting pairs of individuals. A pollinator is able to effectively
reach the nectar in a plant because their respective traits match,
they have compatible phenologies, and they occur in the same
environment. A virus can infect its host because it is able to attach to the
cell surface, effectively penetrate it, and hijack the cellular machinery
to its benefit. Interactions that are not allowed because trait values do
not match have been called "forbidden links" [@oles11mfl]. This prompted
a search for "linkage rules" [@bart13ulr] in ecological networks, *i.e.*
the relationships that must exist between traits of two organisms
in order for an interaction between them to exist. These can be identified
from existing data on traits and interactions [@bart16cfi], and then used
to generate realistic ecological networks [@crea15nme]. @gonz16llf pointed out
that interactions are happening between individuals, and as a consequence, it requires to consider
not only how the traits are distributed at the individual scale, but also how different
behaviors may allow organisms to overcome some of the forbidden interactions.

Although
traits are an important part of what makes interactions happen, they are only
relevant insofar as the organisms are able to encounter one another. The
importance of neutral dynamics (*i.e.* how abundances of different species
can determine the probability that they can interact, based on how often they
would bump into one another by chance) is, somewhat counter-intuitively,
great. @cana12esp revealed that realistic food webs can be predicted with only knoweldge of abundances. In
a host-parasite system, local abundances has also been identified as a
key predictor of species interactions [@cana14een]. Speaking more broadly,
because interactions emerge from all of these ecological mechanisms, there
is a need to develop a deeper understanding of their variability [@pois15swe]. Beyond
the fundamental advance that this represents, this would allow to predict
interactions based on external information [@mora15ibi].

The realization of an interaction between individuals has, by definition, an effect on populations dynamics. But it is also archetypical of complex system dynamics, where low level processes propagate up to higher level of organization and impact emerging properties of the community. If we consider for
instance a population A, its dynamics is not the same when it multiplies
in isolation -- where it can grow exponentially if resources are unlimited
[@malt98epp] or logistically otherwise [@verh38nlq] -- or when it is embedded
in a real-world community, composed of several species interacting with one
another through different processes [@ches08ipc]. That population can lose individuals to
predation, have parasitism increase its death rate and at the same time see
its establishment eased through facilitation. It then becomes necessary to
account for the entire set of interactions to understand population, community and ecosystem dynamics. But the effect of interactions on
dynamics is not always straightforward to elude, both in terms of
directionality and intensity, as there is different types of interactions and
multiple factors influencing their occurrence and strength. Including interactions in population dynamics
analyses is often done using models of the following general form:

$$
\frac{1}{N_i}\frac{\text{d}}{\text{d}t}N_i = r_i \times \sum_j A_{ij} \alpha_{i,j} N_j \,
$$

wherein the adjacency matrix $A$ ($n*n$) lists the realized direct interactions in a
given community composed of $n$ species. $A_{ij} \neq 0$ when species $i$ and
$j$ interact and $0$ otherwise. $\alpha_{ij}$ quantifies the strength of the
interaction. This equation model populations abundance $N$
but can easily be adapted to model biomass flows by replacing populations'
abundances by their biomasses $B_i$ (see for instance @will07hyi).

#DG: j'ai l'impression que l'histoire est incomplète. À quoi sert le modèle ?
Un point intéressant à révéler est que cette matrice peut être utilisée de nombreuses façons. Pour documenter les interactions directes et la structure du réseau (soit en utilisant A directemetn ou par un transformation binaire), en l'inversant pour obtenir les interactions indirectes, ou encore en calculant ses valeurs propres pour étudier sa stabilité et sa réactivité.

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
role of biotic interactions on distribution is very small compared to that of abiotic
conditions, and as such is important only locally [@pear03pic; @boul12adb].
Empirical observations of species-environment relationship are used to
approximate species physiological tolerance to environmental conditions
and potentially predict their range under different scenarios of climate change
[e.g. @arau06cwd]. While these climate envelope models provide a useful
approximation of species potential distribution [@pear02sse], there is mounting
evidences that biotic interactions -- both positive and negative -- play a
critical role in shaping communities not only at local scales [@boul12adb], but
also at macroecological scales [@davi98isr; @arau07ibi; @gote10mss; @heik07bii;
@arau11usc].

It was proposed the role of interactions in shaping species distribution could be approximated from co-occurrence data (Araujo2011). This approach is particularly popular to reconstruct microbial interaction networks (e.g. REF). More recently, joint species
distribution models (JSDM) were developed to account simultaneously for the effect of the environment and co-distribution  [@poll14ucm]. But there are limitations to this
approach. For instance, it does not allow to distinguish between co-occurrence
caused by biotic interactions and correlated responses to unmeasured
environmental variables [@poll14ucm]. Conversely, the lack of association
between species is no evidence of absence of interaction [@caze16tsc]. Further work is therefore needed to move
from correlative species distribution models (SDM) toward more theoretically sound models. In particular, developing methods allowing to include
prior information about the underlying ecological network when building
(J)SDM could help sheding light on the the fundamental processes underlying
species distribution and thus making more accurate predictions [@caze16tsc].
Additionally, @pois17hpt recently showed that biotic interactions respond to
environmental conditions on their own, independently of species.

Ecological networks also offer an ideal framework to study the conditions for
the maintenance of biodiversity in communities through species resources ecologies could not live
together in the same area. The competitive exclusion principle states that the
the strongest competitor will eventually come to dominate the other species and
drive them to local extinction. This stands in contradiction with the existence
of ecological communities containing species that overlap in some extent in
their resources or consumers. Phytoplanktonic communities are often considered to
illustrate this paradox [@hutc61pp], as they exhibit a high biodiversity while
species are competing for a limited number of shared resources (e.g. light,
nitrate). Species coexistence mechanisms [@ches00mms] are
based on species traits that either decrease fitness differences (equalizing
mechanisms) and/or increase niche differentiation between species (stabilizing
mechanisms).

The coexistence theory and the representation of
ecological communities as networks of interactions has brought
new perspective on species coexistence.
@mart06dcp for instance showed that the global non-random structure of the food webs improve
community persistence. The distribution of motifs in food webs [@stou10ufp, see
section "Invariants in ecological networks"] as well as species' role within
motifs [@stou12ecs] are related to community persistence. In mutualistic
networks, the nested structure minimizes competition relative
to competition [@bast09amn; @sugi09csc]. In these networks, the asymmetry of
dependences -- the fact that when one species $A$ depends strongly on another
species $B$ as resource for food or pollination, the other species ($B$) only
weakly depends on $A$ -- also increase persistence [@basc06acn]. This type of
approach highlighted the interplay between traits and structure.
As an example, @bros06ase showed that the allometric scaling of metabolic rates
of species improve community persistence and its overall diversity..

Ecologists have also questioned the way communities are formed and the
hypothetical set of rules embedding this assembly. The network approach allows to explore in details the different processes influencing
ecological communities assembly. @capi09sme, for instance, have characterized the
sequence of community assembly with an assembly
graph. It allows to follow step by step every possible
path in community assembly from, for instance, 0 to 21 species among 3 trophic levels, and
highlight underlying mechanisms. Semi-mechanistic models of food web structures
such as niche model [@will00srya] and the cascade model [@cohe89fwc]  have also been used to
understand community assembly and the impact of invasion. Using also network
framework, [@verd08nap] found that nested community provides generalists species
which facilitate the presence of other species into the network. At the same
time, thanks to an experimental network study, [@oles08tdpb] have observed that
newly arriving species tend to interact more easily with already
well-connected or generalist species. Such results could let us think
about the Drake's controversial idea @drak91cms that species arrival history
would be a *important* factor driving community assembly [@drak91cms]. This proposition was supported by network analyses, such as in @camp11nmp for mutualistic networks. Community assembly have however, a
myriad of different drivers, such as dispersion, interaction strength and
phylogeny distance between species composing communities [@leib17caf;
@kraf07tec; @mahe07ipf; @mont03tpf]. Based on these drivers, distinct types
of models have been developed to predict community assembly dynamics
[@tilm04ntn; @grav06rnn; @souz16qca]. In one hand, niche-based theory models use
coexistence theory and niche differentiation. In the other hand, neutral theory
models are based on species dynamics (migration, extinction and speciation)
under stochastic processes. Theses two types of model are actually
complementary, offering processes explanation at the metacommunity level
(niche theory) and at the phylogenetic level (neutral theory) [*ref*]. Network
framework in community assembly have brought the field one step further and
makes links between other ecological fields, such as disassembly prediction
[see @basc09adea] or co-evolutionary processes [@nuis13cam] much more easier.
#DG: the previous paragraph is very interesting and has a lot of material, but the structure is unclear and the flow of logic not easy to follow

# Conclusion

As networks and graph theory allowed to understand breakdown of the electricity distribution
system in United States or the structure and functioning of social
network, it is also a powerful tool to investigate ecological questions. As long
as the studying system contains interactions, links or connections, graph
theory provides a perfectly adapted simple framework to characterize complex systems such as ecological networks. Indices such as connectance, degree
distribution of network topology serve as basic measurements to describe
systems. Using theses indices, this framework facilitates comparison between
different systems. And the relatively important number of network
studies leads to a myriads of ways to sample, analyze and interpret them [see
@delm17aen].

Studying ecological networks have however a larger purpose than just their
description and classification. Basic measurements are correlated to several
environmental factors and network analysis appears to be helpful in different
ecological fields. As we seen through this chapter, it can be used to study
dynamics of ecological systems and their responses to changes, according to
their stability over time or the BEF relationships in the system. It also
highlights the understanding of mechanisms underlying ecological properties such
as community assembly, coexistence and species distribution. Network studies
were a key to reveal relationships between different properties of ecological
network such as trait and structure.


# Glossary

Adjacency matrix: matrix representing species interactions. If two
species $i$ and $j$ interact, the intersection of the matrix at ${i,j}$ will be
1, and 0 if no interaction.

Assembly rules: Ecological processes leading to a specific species' composition
of a community, *e.g.* competition, predator-prey interactions, arrival history, etc.

**Bipartite / Unipartite network**
The entire representation of the adjacency matrix offers an *unipartite* network
representation, where the hierarchy between nodes and their position into the
network is not always visible (*Figure 1*). On the contrary, a bipartite or
k-partite network is a hierarchical representation of the network (*Figure 2*),
where nodes are separated depending on their position or function into the
network (*e.g* pollinator-plant as bipartite network).

Ecological interactions: Every type of contact between two species that alters influencing the fitness of one or the two species. Interactions can be trophic,
mutualistic or antagonistic, directed or undirected, weighted or unweighted.

Ecosystem functioning: Biotic and abiotic processes that regulate ecosystems,
allowing energy and matter flux between trophic levels and between ecosystems,
*e.g.* biogeochemical cycles.

Graph theory: Mathematical framework used to model the relationship between the
objects of a network

**Jacobian matrix**

Network structure: General shape of a network. It is commonly measured using
connectance, link distribution, general architecture (nestedness and
modularity), etc.

Nodes/Links, Vertices/Edges: Following graph theory, species are represented as
nodes (or vertices), and interactions between them are represented by links (or edges).

Phylogenetic signal: tendency of phylogenetically close species to have similar traits.

# References
