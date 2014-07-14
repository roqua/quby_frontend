var React = window.React = require('react'),
    Panels = require("./ui/panels"),
    mountNode = document.getElementById("quby-app");

var questionnaire = window.questionnaire = {"key":"honos","title":"HoNOS","description":"","outcome_description":"Uitleg schalen:\n* Gedragsproblemen: Somscore/gemiddelde vraag 1, 2, 3\n* Beperkingen: Somscore/gemiddelde vraag 4, 5\n* Sociale problemen: Somscore/gemiddelde vraag 9, 10, 11, 12\n* Symptomatologie: Somscore/gemiddelde vraag 6, 7, 8\n* Functioneren: Somscore/gemiddelde vraag 1, 2, 3, 4, 5, 9, 10, 11, 12\n\nMochten er voor een schaal antwoorden voor vragen missen (niet ingevuld of een 9 ingevuld, 'Geen of onvoldoende informatie voorhanden'), dan wordt de somscore gextrapoleerd.\nExtrapolatie houdt in dat de waardes van missende antwoorden worden geinterpreteerd als het gemiddelde van de geldige antwoorden voor die schaal.\nDe somscore blijft hierdoor vergelijkbaar met somscores van vragenlijsten waar een ander aantal vragen voor die schaal was beantwoord.\nIndien er minder dan 80% van de vragen een geldig antwoord hebben wordt er niet geextrapoleerd en wordt de text 'Er werden onvoldoende vragen beantwoord om een score te kunnen berekenen' getoond.\n","short_description":"Health of the Nations Outcome Scales","panels":[{"class":"Quby::Questionnaires::Entities::Panel","title":"Health of the Nations Outcome Scales (HoNOS)","items":[{"class":"Quby::Questionnaires::Entities::Text","text":"\u003cp\u003e\u003cem\u003eInstructies bij het invullen van de HoNOS:\u003c/em\u003e\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eScoor elke schaal in de volgorde van 1 - 12.\u003c/p\u003e\n\u003c/li\u003e\n\n\u003cli\u003e\n\u003cp\u003eGebruik geen informatie die bij een vorig item al is meegenomen, behalve bij item 10 wat een globale score is.\u003c/p\u003e\n\u003c/li\u003e\n\n\u003cli\u003e\n\u003cp\u003eScoor het MEEST ERNSTIGE probleem dat zich heeft voorgedaan gedurende \u003cem\u003ede afgelopen 2 weken\u003c/em\u003e.\u003c/p\u003e\n\u003c/li\u003e\n\n\u003cli\u003e\n\u003cp\u003eAlle schalen hebben de volgende opbouw:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003e0 = geen probleem\u003c/li\u003e\n\n\u003cli\u003e1 = ondergeschikt probleem, vereist geen actie\u003c/li\u003e\n\n\u003cli\u003e2 = licht probleem, maar duidelijk aanwezig\u003c/li\u003e\n\n\u003cli\u003e3 = matig ernstig probleem\u003c/li\u003e\n\n\u003cli\u003e4 = ernstig tot zeer ernstig probleem\u003c/li\u003e\n\n\u003cli\u003e9 = Gebruik de score 9 wanneer over het betreffende item geen of onvoldoende informatie voorhanden is.\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003c/ul\u003e"}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_1","title":"  1. Hyperactief, agressief, destructief of geagiteerd gedrag","description":"\n*Inclusief:* elk zulk gedrag ongeacht de oorzaak (drugs, alcohol, dementie, psychose, depressie, etc.)\n\n*Exclusief:*  bizar gedrag dat gescoord wordt bij item 6 (hallucinaties en wanen).","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_1","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen problemen van deze aard gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_1_a1"},{"key":"a2","value":1,"description":"Geïrriteerdheid, ruzies, rusteloosheid etc, maar vereist geen actie.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_1_a2"},{"key":"a3","value":2,"description":"Omvat agressieve gebaren, opdringerig of lastig vallen van anderen; bedreigingen of verbale agressie; kleinere schade aan eigendommen (zoals gebroken kopjes of raam); duidelijke hyperactiviteit of agitatie.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_1_a3"},{"key":"a4","value":3,"description":"Fysiek agressief naar mens of dier; dreigende houding; meer ernstige hyperactiviteit of vernieling van eigendommen.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_1_a4"},{"key":"a5","value":4,"description":"Minstens één ernstige fysieke aanval op mens of dier; vernielen van eigendommen (bijvoorbeeld brandstichting); ernstige intimidatie of aanstootgevend gedrag.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_1_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_1_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_2","title":"  2. Opzettelijke zelfverwonding","description":"\n  *Exclusief:* zelfverwonding per ongeluk ontstaan (bijvoorbeeld als gevolg van dementie of verstandelijke handicap); het cognitieve probleem hierbij wordt gescoord op schaal 4, de verwonding op schaal 5.\n\n  *Exclusief:* ziekte of verwonding als direct gevolg van alcohol- of druggebruik worden gescoord op schaal 3 (levercirrose of bijvoorbeeld verwondingen als gevolg van rijden onder invloed worden gescoord op schaal 5).","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_2","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen problemen van deze aard gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_2_a1"},{"key":"a2","value":1,"description":"Voorbijgaande gedachten over zelfmoord maar gering risico de afgelopen periode; geen zelfverwonding.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_2_a2"},{"key":"a3","value":2,"description":"Licht risico gedurende de afgelopen periode; omvat ongevaarlijke zelfverwonding (zoals krassen in de pols).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_2_a3"},{"key":"a4","value":3,"description":"Matig tot ernstig risico voor opzettelijke zelfverwonding gedurende de afgelopen periode; omvat voorbereidende activiteiten (zoals verzamelen van tabletten).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_2_a4"},{"key":"a5","value":4,"description":"Ernstige suïcidepoging en/of ernstige opzettelijke zelfverwonding de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_2_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_2_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_3","title":"  3. Problematisch alcohol- of druggebruik","description":"\n  *Exclusief:* agressief of destructief gedrag als gevolg van alcohol of druggebruik. Dat wordt gescoord op schaal 1.\n\n  *Exclusief:* lichamelijke ziekte of handicap als gevolg van alcohol- of druggebruik. Dat wordt gescoord op schaal 5. ","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_3","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen problemen van deze aard gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_3_a1"},{"key":"a2","value":1,"description":"Enig overmatig gebruik, maar binnen de sociale norm.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_3_a2"},{"key":"a3","value":2,"description":"Verlies van controle over alcohol- of druggebruik, maar niet ernstig verslaafd.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_3_a3"},{"key":"a4","value":3,"description":"Duidelijke zucht naar of afhankelijkheid van alcohol of drugs met frequent controleverlies; risico\u0026#39;s nemen onder invloed.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_3_a4"},{"key":"a5","value":4,"description":"Incapabel door alcohol- of drugs problemen.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_3_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_3_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_4","title":"  4. Cognitieve problemen","description":"\n  *Inclusief:* problemen met geheugen, ori\u0026euml;ntatie en begripsvermogen passend bij enige stoornis: leerstoornis, dementie, schizofrenie, etc.\n\n  *Exclusief:* tijdelijke problemen als gevolg van alcohol/druggebruik (bijvoorbeeld een kater) die gescoord worden op schaal 3 (problematisch alcohol- of druggebruik).","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_4","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen problemen van deze aard gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_4_a1"},{"key":"a2","value":1,"description":"Ondergeschikte problemen met geheugen en begripsvermogen (bijvoorbeeld zo nu en dan vergeten van namen).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_4_a2"},{"key":"a3","value":2,"description":"Licht, maar duidelijk aanwezige problemen (bijvoorbeeld verdwaald in een bekende omgeving, niet herkennen van een bekende); soms in verwarring bij het nemen van simpele beslissingen.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_4_a3"},{"key":"a4","value":3,"description":"Duidelijke desoriëntatie in tijd, plaats of persoon; in de war gebracht door dagelijkse gebeurtenissen; zo nu en dan incoherente spraak; vertraagd denken.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_4_a4"},{"key":"a5","value":4,"description":"Ernstige desoriëntatie (bijvoorbeeld niet herkennen van familie); gevaar voor ongelukken; onbegrijpelijk taalgebruik; verlaagd bewustzijn of stupor.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_4_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_4_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_5","title":"  5. Lichamelijke problemen of handicaps","description":"\n  *Inclusief:* ziekte of handicap van elke oorsprong die mobiliteits-beperkingen geven, het zicht of gehoor aantasten, dan wel anderszins interfereren met het persoonlijk functioneren.\n\n  *Inclusief:* bijwerkingen van medicatie; effecten van drug- of alcoholgebruik; handicaps als gevolg van ongevallen of zelfverwonding voortkomend uit cognitieve problemen, rijden onder invloed, etc.\n\n  *Exclusief:* psychische problemen of gedrags-problemen die gescoord worden op schaal 4 (cognitieve problemen).","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_5","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen lichamelijke gezondheidsproblemen gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_5_a1"},{"key":"a2","value":1,"description":"Ondergeschikte gezondheidsproblemen gedurende de afgelopen periode (bijvoorbeeld verkoudheid, niet ernstige val).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_5_a2"},{"key":"a3","value":2,"description":"Lichamelijke gezondheidsproblemen leiden tot lichte beperking in mobiliteit en activi-teiten.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_5_a3"},{"key":"a4","value":3,"description":"Matige beperking in activiteiten ten gevolgen van lichamelijk gezondheidsprobleem.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_5_a4"},{"key":"a5","value":4,"description":"Ernstige of volledige incapaciteit als gevolg van lichamelijk gezondheidsprobleem.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_5_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_5_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_6","title":"  6. Problemen als gevolg van hallucinaties en waanvoorstellingen","description":"\n  *Inclusief:* hallucinaties en waanvoorstellingen ongeacht de diagnose.\n\n  *Inclusief:* vreemd en bizar gedrag geassocieerd met hallucinaties of waanvoorstellingen.\n\n  *Exclusief:* agressief, destructief of hyperactief gedrag dat voortkomt uit hallucinaties of wanen en dat gescoord wordt op schaal 1 (hyperactief en agressief gedrag).","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_6","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen aanwijzingen voor hallucinaties of waanvoorstellingen gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_6_a1"},{"key":"a2","value":1,"description":"Enigszins vreemde of excentrieke opvattingen niet in overeenstemming met de culturele normen.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_6_a2"},{"key":"a3","value":2,"description":"Wanen of hallucinaties (bijvoorbeeld stemmen, visioenen) zijn aanwezig, maar vormen weinig hinder voor de cliënt en manifesteren zich niet in bizar gedrag, dus klinisch aantoonbaar maar licht.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_6_a3"},{"key":"a4","value":3,"description":"Duidelijke preoccupatie met wanen of hallucinaties wat veel hinder veroorzaakt en/of zich manifesteert in duidelijk bizar gedrag, dus een matig ernstig klinisch probleem.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_6_a4"},{"key":"a5","value":4,"description":"Geestesgesteldheid en gedrag wordt in ernstige mate en nadelig beïnvloed door wanen of hallucinaties, met een zware uitwerking op de cliënt.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_6_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_6_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_7","title":"  7. Problemen met depressieve stemming","description":"\n  *Exclusief:* hyperactiviteit of geagiteerd gedrag. Dat wordt gescoord op schaal 1.\n\n  *Exclusief:* su\u0026iuml;cidegedachten of pogingen. Die worden gescoord op schaal 2.\n\n  *Exclusief:* waanvoorstellingen of hallucinaties. Die worden gescoord op schaal 6.","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_7","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen problemen die samenhangen met een depressieve stemming gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_7_a1"},{"key":"a2","value":1,"description":"Sombere gedachten of kleine veranderingen in stemming.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_7_a2"},{"key":"a3","value":2,"description":"Lichte maar duidelijke depressie met hinder voor de cliënt (bijvoorbeeld schuldgevoelens, verminderd gevoel van eigenwaarde).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_7_a3"},{"key":"a4","value":3,"description":"Depressie met oneigenlijk zelfverwijt; preoccupatie met schuldgevoelens.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_7_a4"},{"key":"a5","value":4,"description":"Ernstige of zeer ernstige depressie met schuldgevoelens of zelfbeschuldiging.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_7_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_7_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_8","title":"  8. Overige psychische en gedragsproblemen","description":"Scoor alleen het meest ernstige klinische probleem niet vallend onder item 6 (hallucinaties en wanen) en item 7 (depressieve stemming).","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_8","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen aanwijzingen voor een van deze problemen gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":["v_9"],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_8_a1"},{"key":"a2","value":1,"description":"Alleen ondergeschikte problemen.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_8_a2"},{"key":"a3","value":2,"description":"Een probleem is klinisch licht aanwezig (cliënt heeft problemen gedeeltelijk onder controle).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_8_a3"},{"key":"a4","value":3,"description":"Incidenteel ernstige aanval of hinder met verlies van controle (bijvoorbeeld moet angst opwekkende situaties helemaal vermijden, moet een buurman te hulp roepen). Dus een matig ernstig probleem.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_8_a4"},{"key":"a5","value":4,"description":"Ernstig probleem overheerst de meeste activiteiten.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_8_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":["v_9"],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_8_a9"}]},{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_9","title":"Specificeer het type probleem:","description":null,"type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_9","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":1,"description":"fobie","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a1"},{"key":"a2","value":2,"description":"angst","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a2"},{"key":"a3","value":3,"description":"dwangmatig","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a3"},{"key":"a4","value":4,"description":"gespannenheid","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a4"},{"key":"a5","value":5,"description":"dissociatief","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a5"},{"key":"a6","value":6,"description":"somatiserend","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a6"},{"key":"a7","value":7,"description":"eetproblemen","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a7"},{"key":"a8","value":8,"description":"slaapproblemen","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a8"},{"key":"a9","value":9,"description":"seksuele problemen","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a9"},{"key":"a10","value":10,"description":"overig","questions":[{"class":"Quby::Questionnaires::Entities::Questions::StringQuestion","key":"v_10","title":"Namelijk","description":null,"type":"string","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_10","parentKey":"v_9","parentOptionKey":"a10","deselectable":false,"autocomplete":"off"}],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_9_a10"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_11","title":"  9. Problemen met relaties","description":"Scoor het meest ernstige probleem van de cli\u0026euml;nt dat samenhangt met actief of passief terugtrekken uit sociale relaties en/of dat samenhangt met niet-ondersteunende, destructieve of zelfvernietigende relaties.","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_11","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen belangrijk probleem van deze aard gedurende de afgelopen periode.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_11_a1"},{"key":"a2","value":1,"description":"Ondergeschikte niet-klinische problemen.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_11_a2"},{"key":"a3","value":2,"description":"Duidelijk probleem in maken of onderhouden van ondersteunende relaties: cliënt klaagt hierover en/of de problemen zijn duidelijk voor anderen.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_11_a3"},{"key":"a4","value":3,"description":"Blijvend belangrijk probleem als gevolg van actief of passief terugtrekken uit sociale relaties en/of als gevolg van relaties waar weinig of geen steun van uit gaat.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_11_a4"},{"key":"a5","value":4,"description":"Ernstig en kommervol sociaal isolement wegens onvermogen tot communiceren met anderen en/of wegens terugtrekken uit sociale relaties.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_11_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_11_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_14","title":"  10. Problemen met ADL","description":"\n  Scoor het totale ADL niveau (bijvoorbeeld problemen met basale zelfzorgactiviteiten zoals eten, wassen, aankleden, naar het toilet gaan; ook complexe vaardigheden als budgetteren, regelen van woonruimte, werk en vrije tijd, mobiliteit en gebruik van openbaar vervoer, boodschappen doen, zelfontplooiing, etc.).\n\n  *Inclusief:* gebrek aan motivatie om mogelijkheden te gebruiken die de zelfredzaamheid kunnen vergroten, want dit draagt bij aan een lager totaal ADL niveau.\n\n  *Exclusief:* gebrek aan mogelijkheden om intacte bekwaamheden en vaardigheden uit te oefenen. Dit wordt gescoord bij schaal 11 en 12.","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_14","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Geen problemen van deze aard gedurende afgelopen periode; goed in staat op alle gebieden te functioneren.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_14_a1"},{"key":"a2","value":1,"description":"Alleen ondergeschikte problemen (bijvoorbeeld slordig zijn, gedesorganiseerd).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_14_a2"},{"key":"a3","value":2,"description":"Zelfzorg op peil, maar belangrijk onvermogen tot uitvoeren van één of meerdere van de genoemde complexe vaardigheden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_14_a3"},{"key":"a4","value":3,"description":"Belangrijk probleem op één of meer gebieden van zelfzorg (eten, wassen, aankleden, naar toilet gaan) en belangrijk onvermogen tot het uitvoeren van meerdere complexe vaardigheden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_14_a4"},{"key":"a5","value":4,"description":"Ernstige beperkingen op alle of bijna alle gebieden van zelfzorg en complexe vaardigheden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_14_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_14_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_15","title":"  11. Problemen met woonomstandigheden","description":"\n  Scoor de globale ernst van problemen in de kwaliteit van de woonomstandigheden en het dagelijks huishouden. Is aan de basis behoeften voldaan (verwarming, licht, hygi\u0026euml;ne)? Zo ja, is er hulp bij het omgaan met eventuele beperkingen en zijn er mogelijkheden om aanwezige vaardigheden toe te kunnen passen en nieuwe vaardigheden te kunnen ontwikkelen?\n\n  *Exclusief:* het niveau van functioneren; dat wordt gescoord op schaal 10 (problemen met ADL).\n\n  N.B. Scoor de gebruikelijke woonomstandigheden van de cliënt.","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_15","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"Accommodatie en woonomstandigheden zijn acceptabel; zij dragen ertoe bij om elke beperking gescoord op schaal 10 (problemen met ADL) zo beperkt mogelijk te houden en ondersteunen de zelfredzaamheid.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_15_a1"},{"key":"a2","value":1,"description":"Accommodatie is redelijk acceptabel, al zijn er kleine of voorbijgaande problemen (bijvoorbeeld de locatie is niet ideaal, andere voorkeur, het eten niet lekker vinden, etc).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_15_a2"},{"key":"a3","value":2,"description":"Belangrijke problemen op één of meerdere gebieden betreffende de accommodatie en/of het beleid (bijvoorbeeld beperkte keus; staf of gezin weten niet goed hoe handicaps te beperken of hoe te helpen bij het toepassen of ontwikkelen van nieuwe of intacte vaardigheden).","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_15_a3"},{"key":"a4","value":3,"description":"Zorgwekkende multipele problemen met betrekking tot de woonomstandigheden (bijvoorbeeld sommige basisvoorzieningen ontbreken); de woonomgeving heeft geen of minimale voorzieningen om de onafhankelijkheid van de cliënt te vergroten.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_15_a4"},{"key":"a5","value":4,"description":"Accommodatie is onacceptabel (bijvoorbeeld basisvoorzieningen ontbreken, dreigende uithuis zetting of dakloosheid of woonomstandigheden zijn anderszins onacceptabel) en verergert de problemen van de cliënt.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_15_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_15_a9"}]}]},{"class":"Quby::Questionnaires::Entities::Panel","title":null,"items":[{"class":"Quby::Questionnaires::Entities::Questions::RadioQuestion","key":"v_16","title":"  12. Mogelijkheden voor het gebruiken en verbeteren van vaardigheden: beroepsmatig en vrije tijd","description":"\n  Scoor de problemen in de kwaliteit van de dagelijkse omgeving van de cli\u0026euml;nt. Is er hulp bij het omgaan met beperkingen, zijn er mogelijkheden tot behouden en vergroten van vaardigheden en activiteiten op gebied van werk en vrije tijd. Let op zaken als stigma, gebrek aan gekwalificeerd personeel, toegang tot voorzieningen (bijvoorbeeld bezettingsgraad en uitrusting van dagcentra, werkplaatsen, verenigingen).\n\n  *Exclusief:* het niveau van functioneren zelf. Dat wordt gescoord op schaal 10 (problemen met ADL).\n\n  N.B. Scoor de gebruikelijke situatie van de cliënt (wanneer een cliënt is opgenomen, scoor de situatie van voor de opname).","type":"radio","validations":[{"type":"requires_answer","explanation":null}],"unit":null,"hidden":null,"display_modes":null,"default_invisible":false,"viewSelector":"#item_v_16","parentKey":null,"parentOptionKey":null,"deselectable":false,"options":[{"key":"a1","value":0,"description":"De dagelijkse omgeving van cliënt is acceptabel; draagt bij om elke beperking gescoord op schaal 10 (problemen met ADL) zo beperkt mogelijk te houden en ondersteunt de zelfredzaamheid.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_16_a1"},{"key":"a2","value":1,"description":"Ondergeschikte of tijdelijke problemen (bijvoorbeeld verlate betaling door de uitkerende instantie); redelijke voorzieningen zijn beschikbaar, maar niet altijd op het gewenste moment, etc.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_16_a2"},{"key":"a3","value":2,"description":"Beperkte keus in activiteiten; gebrek aan tolerantie (bijvoorbeeld onterecht de toegang geweigerd tot openbare voorzieningen zoals een bibliotheek of badhuis); belemmeringen door het ontbreken van een vaste woon- of verblijfplaats; onvoldoende mantelzorg of professionele zorg; zinvolle dagvoorziening is in principe beschikbaar, maar voor een beperkt aantal uren.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_16_a3"},{"key":"a4","value":3,"description":"Duidelijke deficiëntie in diensten om de beperkingen door bestaande handicaps tot een minimum te beperken; geen mogelijkheden om intacte vaardigheden te benutten of nieuwe vaardigheden toe te voegen; ongeschoolde zorg moeilijk toegankelijk.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_16_a4"},{"key":"a5","value":4,"description":"Gebrek aan enige mogelijkheid tot activiteiten overdag verergert de problemen van de cliënt.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_16_a5"},{"key":"a9","value":9,"description":"Geen of onvoldoende informatie voorhanden.","questions":[],"inner_title":null,"hides_questions":[],"shows_questions":[],"hidden":false,"placeholder":false,"view_id":"answer_v_16_a9"}]}]}]};

var QubyApp = React.createClass({
  getInitialState: function() {
    return {values: {}};
  },

  setValue: function(key, value) {
    var newValues = {};
    for (var existingKey in this.state.values) { newValues[existingKey] = this.state.values[existingKey] };
    newValues[key] = value;
    this.setState({values: newValues});
  },

  render: function() {
    return React.DOM.div({}, [
      Panels({panels: this.props.questionnaire.panels, index: this.state.currentPanel,
              values: this.state.values, setValue: this.setValue})
    ]);
  }
});

React.renderComponent(
    QubyApp({questionnaire: questionnaire}),
    mountNode
);

