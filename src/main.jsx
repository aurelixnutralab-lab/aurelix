import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./App.jsx";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
);

// [
//   {
//     SrNo: 1,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Alfalfa Extract",
//     ScientificName: "Medicago sativa",
//     CommonName: "Alfa Alfa",
//     StandardizedGrade: "10:1 Ratio",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Alfalfa, or Medicago sativa, is a nutrient-rich herb traditionally used to support overall health. Native to the Middle East, it has been cultivated for centuries as a forage and medicinal plant. Its leaves contain vitamins, minerals, and phytonutrients that promote vitality and wellness. Historically, it was used as a tonic for digestion and detoxification. Alfalfa is gentle yet potent, supporting metabolism and natural cleansing processes. Modern herbal formulations use its extract to provide concentrated benefits. It is also recognized for its antioxidant properties and support of healthy energy levels. Alfalfa remains popular in functional wellness and Ayurvedic applications.",
//     Function:
//       "Alfalfa extract supports digestion, detoxification, and nutrient absorption. It provides essential vitamins, minerals, and antioxidants to enhance overall vitality. Regular use may improve energy levels, metabolic function, and immune health. It contributes to liver and kidney function, assists in cleansing the bloodstream, and promotes healthy skin and hair. Alfalfa also aids in maintaining healthy cholesterol levels and supports cardiovascular wellness. The herb is widely used as a general tonic for physical and mental well-being, and in modern supplements for holistic health benefits.",
//     ImageURL: "https://via.placeholder.com/150?text=Alfalfa+Extract",
//   },
//   {
//     SrNo: 2,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Aloe Vera",
//     ScientificName: "Aloe barbadensis",
//     CommonName: "Aloe Vera",
//     StandardizedGrade: "100X, 200X; Aloe Polysaccharides 4%–25%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Aloe Vera, scientifically Aloe barbadensis, is a succulent plant known for its soothing, healing, and hydrating properties. Originating from the Arabian Peninsula, it has been used for thousands of years in traditional medicine, including Ayurveda and ancient Egyptian remedies. The plant contains polysaccharides, vitamins, and antioxidants that support digestive and skin health. Aloe Vera gel is widely applied for wound healing, moisturizing, and anti-inflammatory purposes. It also aids in gut health and nutrient absorption. Modern research highlights its benefits in detoxification and immunity enhancement. Aloe Vera remains a versatile and essential herb in both topical and oral wellness formulations.",
//     Function:
//       "Aloe Vera extract enhances digestive health by soothing the stomach lining and supporting nutrient absorption. It provides anti-inflammatory and antioxidant benefits that strengthen immunity. The extract helps in detoxifying the liver and maintaining cardiovascular health. It improves skin hydration, promotes wound healing, and supports overall skin wellness. Aloe Vera may also regulate blood sugar levels and improve metabolic function. Regular use contributes to energy balance, gut microbiome health, and systemic wellness. The herb is commonly incorporated into nutraceutical, cosmetic, and dietary products for holistic health benefits.",
//     ImageURL: "https://via.placeholder.com/150?text=Aloe+Vera",
//   },
//   {
//     SrNo: 3,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Andrographis (Kalmegh)",
//     ScientificName: "Andrographis paniculata",
//     CommonName: "Kalmegh",
//     StandardizedGrade: "Andrographolides 10%, 50%, 98%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Andrographis, known as Kalmegh, is a bitter herb native to South Asia, valued for its potent immune-boosting and liver-protective properties. Traditionally used in Ayurveda and Chinese medicine, it supports detoxification and overall wellness. The plant contains andrographolides, which provide anti-inflammatory, antioxidant, and antiviral effects. Historically, it has been used to treat fevers, digestive issues, and respiratory infections. Andrographis extract is widely utilized in modern herbal formulations for supporting immune function and liver health. It enhances energy, reduces oxidative stress, and promotes metabolic balance. Its versatility makes it an important adaptogenic herb for systemic health.",
//     Function:
//       "Andrographis extract strengthens immunity, supports liver detoxification, and enhances energy levels. It reduces inflammation, oxidative stress, and assists in managing digestive disorders. The herb aids in maintaining healthy blood sugar levels and protects hepatic function. It supports respiratory health by reducing the duration and severity of infections. Andrographis also contributes to systemic detoxification and promotes overall wellness. Regular use may improve vitality, mental clarity, and resilience to environmental stressors. Its bioactive compounds provide adaptogenic support, making it a cornerstone herb in immune and liver wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Andrographis",
//   },
//   {
//     SrNo: 4,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Ashoka Tree",
//     ScientificName: "Saraca indica",
//     CommonName: "Ashoka",
//     StandardizedGrade: "Tannin 4%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "The Ashoka Tree, Saraca indica, is a sacred plant native to India with centuries of use in Ayurveda for female reproductive health. Its bark contains tannins and bioactive compounds that support uterine health, hormonal balance, and menstrual regularity. Traditionally, it has been used to relieve menstrual discomfort and improve fertility. The herb exhibits antioxidant and anti-inflammatory properties and contributes to general wellness in women. Ashoka extract is incorporated in modern herbal formulations for gynecological support and reproductive vitality. Its cultural significance and therapeutic benefits have made it an important herb for female wellness across generations.",
//     Function:
//       "Ashoka extract supports female reproductive health, regulates hormonal balance, and promotes uterine wellness. It alleviates menstrual discomfort and helps in fertility management. The herb exhibits antioxidant properties that protect reproductive tissues from oxidative stress. It reduces inflammation in reproductive organs and supports overall gynecological health. Regular use can enhance vitality, energy, and systemic wellness in women. Ashoka also aids in detoxifying the body and maintaining hormonal equilibrium. Its traditional and modern applications make it a reliable herbal support for women’s health.",
//     ImageURL: "https://via.placeholder.com/150?text=Ashoka+Tree",
//   },
//   {
//     SrNo: 5,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Ashwagandha Extract",
//     ScientificName: "Withania somnifera",
//     CommonName: "Ashwagandha",
//     StandardizedGrade: "Withanolides 2.5%, 5%, 8%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Ashwagandha, Withania somnifera, is an adaptogenic herb widely used in Ayurveda to relieve stress, improve vitality, and enhance stamina. Its roots contain withanolides, bioactive compounds with anti-inflammatory, antioxidant, and neuroprotective properties. Traditionally, it supports mental clarity, physical performance, and immune function. Ashwagandha has been used for centuries to improve resilience, sleep quality, and overall well-being. The extract is incorporated into modern dietary supplements, functional foods, and wellness products. Its holistic benefits make it a cornerstone herb in adaptogenic formulations and general health support.",
//     Function:
//       "Ashwagandha extract reduces stress, lowers cortisol levels, and supports mental clarity. It enhances stamina, physical performance, and immune function. The herb provides antioxidant and anti-inflammatory support, protecting cells from damage. It promotes restful sleep, balances energy levels, and aids in hormonal equilibrium. Ashwagandha also supports cardiovascular health, cognitive function, and overall resilience. Regular use improves vitality, mood, and adaptation to physical and emotional stressors. Its wide range of systemic benefits makes it a trusted herb in both traditional and modern wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Ashwagandha+Extract",
//   },
//   // Continue similarly for all remaining products up to 67

//   {
//     SrNo: 6,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Astragalus Extract",
//     ScientificName: "Astragalus membranaceus",
//     CommonName: "Astragalus",
//     StandardizedGrade: "Polysaccharides 10%–80%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Astragalus is a traditional Chinese medicinal herb used for centuries to enhance immunity and support longevity. Its roots contain polysaccharides that boost the body's natural defense mechanisms. Astragalus also helps maintain cardiovascular health and supports kidney and liver function. It is considered a general tonic for overall wellness and vitality. The herb exhibits antioxidant and anti-inflammatory properties, protecting cells from oxidative stress. Astragalus has been used to reduce fatigue and improve stamina. It also supports healthy aging and metabolic balance, making it a key ingredient in both traditional and modern wellness formulations.",
//     Function:
//       "Astragalus extract strengthens the immune system and enhances resistance to infections. It supports cardiovascular health, liver and kidney function, and reduces oxidative stress. The herb promotes energy, vitality, and stamina. It helps maintain metabolic balance and supports healthy aging. Astragalus exhibits anti-inflammatory properties, protecting tissues and organs. Regular use may reduce fatigue and enhance overall wellness. It is widely used in herbal formulations for systemic support and longevity.",
//     ImageURL: "https://via.placeholder.com/150?text=Astragalus+Extract",
//   },
//   {
//     SrNo: 7,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Banaba Extract",
//     ScientificName: "Lagerstroemia speciosa",
//     CommonName: "Banaba",
//     StandardizedGrade: "Corosolic acid 1%, 18%, 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Banaba extract, derived from the leaves of Lagerstroemia speciosa, has been traditionally used to support blood sugar management. Rich in corosolic acid, it promotes healthy glucose metabolism and aids in weight management. The herb also provides antioxidant support, reducing oxidative stress in the body. Banaba has been used in folk medicine to improve kidney and liver health. Modern research supports its role in maintaining metabolic balance and cardiovascular wellness. The extract helps reduce sugar cravings and supports overall energy. It is widely incorporated into nutraceutical and dietary formulations for metabolic and general health support.",
//     Function:
//       "Banaba extract regulates blood sugar levels and supports healthy glucose metabolism. It promotes weight management and reduces sugar cravings. The herb provides antioxidant support, protecting cells from oxidative stress. It supports kidney, liver, and cardiovascular health. Regular use enhances energy, stamina, and metabolic balance. Banaba is also known to assist in maintaining healthy cholesterol levels. Its bioactive compounds support systemic wellness, making it a key ingredient in dietary and nutraceutical formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Banaba+Extract",
//   },
//   {
//     SrNo: 8,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Berberine HCL",
//     ScientificName: "Berberis aristata",
//     CommonName: "Berberine",
//     StandardizedGrade: "Berberine 97%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Berberine HCL, derived from Berberis aristata, is a bioactive compound widely used to support metabolic and cardiovascular health. Traditionally used in Ayurveda and Chinese medicine, it helps regulate glucose and lipid metabolism. Berberine exhibits potent antimicrobial, anti-inflammatory, and antioxidant properties. It supports digestive health and maintains a balanced gut microbiome. Berberine also promotes heart and liver health by reducing oxidative stress. The extract is commonly used in nutraceuticals for blood sugar management, cholesterol regulation, and overall wellness. Its versatility makes it a valuable herbal supplement for metabolic support.",
//     Function:
//       "Berberine extract regulates blood sugar and lipid levels, supporting metabolic health. It improves insulin sensitivity and helps manage weight. The herb exhibits antioxidant and anti-inflammatory effects, protecting cells from damage. It supports digestive health and a balanced gut microbiome. Berberine promotes cardiovascular and liver wellness. Regular use enhances energy, vitality, and systemic balance. Its broad therapeutic properties make it a reliable component in nutraceutical and herbal formulations for metabolic support.",
//     ImageURL: "https://via.placeholder.com/150?text=Berberine+HCL",
//   },
//   {
//     SrNo: 9,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Black Cohosh",
//     ScientificName: "Cimicifuga racemosa",
//     CommonName: "Black Cohosh",
//     StandardizedGrade: "Triterpene 8%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Black Cohosh is a traditional herb used for supporting female hormonal health and menopause comfort. Native to North America, it contains triterpene glycosides that provide adaptogenic and anti-inflammatory effects. Historically, it has been used to relieve hot flashes, mood swings, and menstrual discomfort. The herb supports reproductive wellness and maintains hormonal balance. Black Cohosh also exhibits antioxidant properties that protect cells from oxidative stress. It is incorporated into modern herbal formulations for women's health, stress relief, and general vitality. Its holistic benefits make it an essential supplement in functional wellness programs.",
//     Function:
//       "Black Cohosh extract promotes hormonal balance and supports reproductive health. It helps relieve symptoms of menopause such as hot flashes and mood swings. The herb provides anti-inflammatory and antioxidant effects. Regular use supports menstrual comfort and female vitality. It enhances systemic wellness and energy levels. Black Cohosh may assist in stress management and maintaining mental clarity. Its therapeutic properties make it a key component in formulations for women’s health and overall well-being.",
//     ImageURL: "https://via.placeholder.com/150?text=Black+Cohosh",
//   },
//   {
//     SrNo: 10,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Boswellia Extract",
//     ScientificName: "Boswellia serrata",
//     CommonName: "Indian Frankincense",
//     StandardizedGrade: "AKBA 30%; Boswellic Acid 40%–85%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Boswellia extract, derived from the resin of Boswellia serrata, has been used traditionally for its anti-inflammatory and joint-supporting properties. It contains boswellic acids that reduce inflammation and support cartilage health. The herb is also known for enhancing mobility and relieving joint discomfort. Historically, it has been used for musculoskeletal conditions and general wellness. Boswellia exhibits antioxidant properties that protect tissues from oxidative stress. Modern research validates its role in joint health and inflammation management. The extract is incorporated into dietary supplements, herbal formulations, and functional wellness products for musculoskeletal support.",
//     Function:
//       "Boswellia extract reduces inflammation, supports joint health, and enhances mobility. It provides antioxidant benefits and protects tissues from oxidative stress. The herb alleviates discomfort associated with arthritis and musculoskeletal conditions. Regular use may improve flexibility and physical performance. Boswellia supports overall systemic wellness and resilience to oxidative damage. It contributes to cartilage and connective tissue health. Its bioactive compounds make it a widely used ingredient in joint-supporting nutraceuticals and herbal formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Boswellia+Extract",
//   },
//   {
//     SrNo: 11,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Brahmi (Bacopa)",
//     ScientificName: "Bacopa monnieri",
//     CommonName: "Brahmi",
//     StandardizedGrade: "Bacosides 20%, 30%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Brahmi, known as Bacopa monnieri, is a traditional Ayurvedic herb renowned for its cognitive and memory-enhancing properties. It contains bacosides, which support nerve function, neurotransmitter balance, and mental clarity. Historically, Brahmi has been used to reduce anxiety, improve focus, and enhance learning abilities. It also possesses antioxidant properties, protecting brain cells from oxidative stress. The herb is incorporated into modern supplements for neuroprotection, stress reduction, and overall cognitive health. Brahmi promotes mental calmness and emotional balance. It is widely recognized in wellness formulations targeting brain health, memory retention, and concentration.",
//     Function:
//       "Brahmi extract enhances memory, focus, and cognitive function. It reduces stress and anxiety while supporting mental clarity and emotional balance. The herb provides antioxidant protection for neurons and promotes neurotransmitter activity. It aids in learning and concentration, improving overall brain health. Regular use supports neuroprotection and mental resilience. Brahmi also contributes to relaxation, calmness, and improved sleep quality. Its holistic effects make it a key component in brain health and wellness supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Brahmi",
//   },
//   {
//     SrNo: 12,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Cissus Extract",
//     ScientificName: "Cissus quadrangularis",
//     CommonName: "Cissus",
//     StandardizedGrade: "Ketosterones 2.5%, 5%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Cissus quadrangularis, commonly called Cissus, is an ancient medicinal plant used to support bone health and joint recovery. Rich in ketosterones, it promotes bone density, strengthens connective tissues, and accelerates fracture healing. Traditionally, it has been used to treat osteoporosis, joint pain, and injuries. The herb also exhibits anti-inflammatory and antioxidant properties, reducing oxidative stress in musculoskeletal tissues. Modern herbal formulations use Cissus extract to enhance recovery, flexibility, and mobility. It supports overall skeletal and muscular health. Cissus is valued in both traditional medicine and contemporary nutraceuticals for orthopedic and joint support.",
//     Function:
//       "Cissus extract promotes bone density, accelerates fracture healing, and supports joint recovery. It reduces inflammation and oxidative stress in connective tissues. The herb strengthens bones, ligaments, and cartilage while enhancing flexibility and mobility. Regular use may alleviate joint pain and support musculoskeletal health. It aids in recovery from injuries and supports physical performance. Cissus also contributes to overall skeletal resilience and vitality. Its bioactive compounds make it a trusted ingredient in joint and bone health formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Cissus+Extract",
//   },
//   {
//     SrNo: 13,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Coleus (Forskolin)",
//     ScientificName: "Coleus forskohlii",
//     CommonName: "Coleus",
//     StandardizedGrade: "Forskolin 10%, 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Coleus forskohlii is a medicinal plant traditionally used in Ayurveda for supporting weight management and metabolic health. It contains forskolin, which activates cellular enzymes that enhance fat metabolism and energy production. Historically, it has been used to support heart health and circulation. The extract also provides antioxidant and anti-inflammatory benefits. Coleus is incorporated into modern nutraceuticals for weight management, cardiovascular support, and systemic wellness. Its bioactive compounds promote lipolysis and metabolic efficiency. Coleus extract contributes to maintaining healthy body composition and overall vitality.",
//     Function:
//       "Coleus extract enhances fat metabolism, supports weight management, and promotes energy production. It contributes to cardiovascular health and improves circulation. The herb exhibits antioxidant and anti-inflammatory properties, protecting cells from oxidative stress. Regular use supports metabolic efficiency and healthy body composition. Coleus also aids in maintaining hormonal balance and overall wellness. It promotes vitality, endurance, and physical performance. The extract is widely used in dietary supplements and herbal formulations targeting metabolism and weight support.",
//     ImageURL: "https://via.placeholder.com/150?text=Coleus+Forskolin",
//   },
//   {
//     SrNo: 14,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Fenugreek Extract",
//     ScientificName: "Trigonella foenum-graecum",
//     CommonName: "Fenugreek",
//     StandardizedGrade: "Saponins 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Fenugreek, Trigonella foenum-graecum, is a traditional herb used for blood sugar regulation, lactation support, and testosterone enhancement. Its seeds are rich in saponins and other bioactive compounds that provide anti-inflammatory, antioxidant, and metabolic benefits. Historically, fenugreek has been used to support digestive health, improve appetite, and maintain metabolic balance. Modern nutraceuticals use fenugreek extract for blood sugar management, lactation enhancement, and athletic performance. The herb also supports heart and kidney health. Its multifaceted benefits make it a valuable ingredient in dietary supplements and functional wellness products.",
//     Function:
//       "Fenugreek extract helps maintain healthy blood sugar levels and supports metabolic balance. It enhances lactation and promotes hormonal health. The herb exhibits antioxidant and anti-inflammatory properties, supporting systemic wellness. Fenugreek also contributes to digestive health and appetite regulation. Regular use may improve testosterone levels, energy, and vitality. It supports cardiovascular, liver, and kidney functions. Fenugreek is widely incorporated in nutraceuticals for its versatile health benefits.",
//     ImageURL: "https://via.placeholder.com/150?text=Fenugreek+Extract",
//   },
//   // Continue similarly for products 15 to 67

//   {
//     SrNo: 15,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Garcinia Cambogia",
//     ScientificName: "Garcinia gummi-gutta",
//     CommonName: "Garcinia",
//     StandardizedGrade: "HCA 50%, 60%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Garcinia Cambogia is a tropical fruit traditionally used to support weight management and appetite control. The rind contains hydroxycitric acid (HCA), which may inhibit fat synthesis and promote satiety. Historically, it has been used in folk medicine for digestive health and metabolic support. The extract exhibits antioxidant and anti-inflammatory properties. Modern nutraceuticals use Garcinia Cambogia to assist in healthy body composition, metabolic efficiency, and appetite regulation. Its bioactive compounds support energy metabolism and systemic wellness. The herb is popular in dietary supplements for weight management, detoxification, and overall vitality.",
//     Function:
//       "Garcinia Cambogia extract helps inhibit fat production and controls appetite. It supports healthy weight management and metabolic function. The herb exhibits antioxidant and anti-inflammatory effects that protect cellular health. Regular use may enhance energy metabolism and systemic wellness. Garcinia Cambogia promotes satiety and reduces cravings. It also supports digestive health and helps maintain balanced cholesterol levels. Its bioactive HCA contributes to effective weight management strategies, making it a key ingredient in dietary supplements and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Garcinia+Cambogia",
//   },
//   {
//     SrNo: 16,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Ginseng (Panax)",
//     ScientificName: "Panax ginseng",
//     CommonName: "Ginseng",
//     StandardizedGrade: "Ginsenosides 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Panax Ginseng is a revered adaptogenic herb traditionally used to enhance physical stamina, mental clarity, and immune function. Its roots contain ginsenosides, which provide antioxidant, anti-inflammatory, and neuroprotective benefits. Historically, it has been used in Chinese medicine to combat fatigue, stress, and improve vitality. Ginseng supports cardiovascular health, metabolic balance, and overall wellness. Modern research highlights its role in improving cognitive function, energy levels, and resilience to stress. The extract is incorporated into supplements, tonics, and functional foods aimed at holistic wellness and systemic balance. It remains a cornerstone herb in adaptogenic and energy-supporting formulations.",
//     Function:
//       "Ginseng extract enhances physical energy, stamina, and mental clarity. It supports immune function and provides antioxidant protection. The herb aids in stress adaptation and cognitive performance. Regular use may improve vitality, endurance, and metabolic health. Ginseng contributes to cardiovascular wellness and supports overall systemic balance. It reduces oxidative stress and inflammation, promoting general health. Its bioactive ginsenosides make it a vital ingredient in adaptogenic, energy-boosting, and wellness-focused supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Ginseng+Panax",
//   },
//   {
//     SrNo: 17,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Guggul Extract",
//     ScientificName: "Commiphora mukul",
//     CommonName: "Guggul",
//     StandardizedGrade: "Guggulsterones 2.5%, 10%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Guggul extract, derived from the resin of Commiphora mukul, is a traditional Ayurvedic herb known for supporting cholesterol management and thyroid function. Rich in guggulsterones, it exhibits anti-inflammatory and antioxidant properties. Historically, it has been used to promote cardiovascular health, metabolic balance, and overall vitality. The extract supports lipid metabolism and healthy weight management. Guggul also aids in reducing oxidative stress and inflammation in systemic tissues. Modern formulations incorporate it for joint, heart, and metabolic wellness. It remains a highly regarded herb in functional wellness and Ayurvedic medicine.",
//     Function:
//       "Guggul extract helps maintain healthy cholesterol levels and supports cardiovascular health. It promotes thyroid function and metabolic balance. The herb provides anti-inflammatory and antioxidant benefits, protecting cells from oxidative damage. Regular use supports joint health and systemic vitality. Guggul aids in lipid metabolism and weight management. It enhances overall energy, endurance, and resilience to stress. Its bioactive guggulsterones make it an essential component of Ayurvedic and modern wellness supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Guggul+Extract",
//   },
//   // Continue similarly for products 18 to 67
//   {
//     SrNo: 18,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Gymnema Sylvestre",
//     ScientificName: "Gymnema sylvestre",
//     CommonName: "Gymnema",
//     StandardizedGrade: "Gymnemic Acid 25%, 75%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Gymnema Sylvestre, known as the 'sugar destroyer,' is a traditional herb used to support healthy blood sugar levels and metabolic health. It contains gymnemic acids, which reduce sugar absorption in the intestines and support insulin function. Historically, it has been used in Ayurveda for diabetes management and digestive health. The herb exhibits antioxidant and anti-inflammatory properties, protecting pancreatic and liver cells. Gymnema also helps control sugar cravings, supports weight management, and enhances overall metabolic balance. Modern formulations incorporate it in dietary supplements for blood sugar control, energy support, and systemic wellness. It is highly valued in traditional and contemporary medicine for its versatile metabolic benefits.",
//     Function:
//       "Gymnema extract reduces sugar absorption, supports insulin function, and helps maintain healthy blood sugar levels. It reduces cravings for sweet foods and supports weight management. The herb exhibits antioxidant and anti-inflammatory properties, protecting liver and pancreas. Regular use may improve metabolic efficiency and energy balance. It promotes digestive health and supports overall systemic wellness. Gymnema contributes to cardiovascular and kidney health. Its bioactive gymnemic acids make it a key ingredient in diabetes-supportive nutraceuticals.",
//     ImageURL: "https://via.placeholder.com/150?text=Gymnema+Sylvestre",
//   },
//   {
//     SrNo: 19,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Horny Goat Weed",
//     ScientificName: "Epimedium brevicornum",
//     CommonName: "Horny Goat Weed",
//     StandardizedGrade: "Icariin 5%–98%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Horny Goat Weed is a traditional herb used to support libido, sexual vitality, and overall hormonal balance. Its active compound, icariin, is believed to enhance blood flow, boost energy, and improve sexual function. Historically, it has been used in Chinese medicine for stamina, reproductive health, and vitality. The herb exhibits antioxidant and anti-inflammatory effects. It is widely incorporated into modern dietary supplements targeting sexual health, energy, and endurance. Horny Goat Weed also contributes to bone strength and cardiovascular wellness. Its bioactive compounds help promote systemic vitality and hormonal support. The extract is valued for both traditional uses and contemporary functional wellness applications.",
//     Function:
//       "Horny Goat Weed extract supports sexual health, libido, and reproductive vitality. It improves blood circulation and enhances energy levels. The herb exhibits antioxidant and anti-inflammatory properties, supporting overall systemic health. Regular use may improve stamina, endurance, and physical performance. It contributes to bone health, cardiovascular function, and hormonal balance. Horny Goat Weed enhances vitality and resilience. Its bioactive icariin makes it a popular component in sexual wellness and general energy-supportive formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Horny+Goat+Weed",
//   },
//   {
//     SrNo: 20,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Horse Chestnut",
//     ScientificName: "Aesculus hippocastanum",
//     CommonName: "Horse Chestnut",
//     StandardizedGrade: "Aescin 20%–40%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Horse Chestnut extract is traditionally used to support healthy veins, circulation, and cardiovascular function. Rich in aescin, it strengthens blood vessel walls, reduces swelling, and improves microcirculation. Historically, it has been used in Europe for chronic venous insufficiency, varicose veins, and edema. The herb exhibits anti-inflammatory and antioxidant properties, promoting systemic vascular health. Modern formulations incorporate it for leg comfort, circulation, and cardiovascular wellness. Horse Chestnut also supports joint and tissue health. Its bioactive compounds provide protective effects for circulatory and connective tissues. The extract is widely used in dietary supplements targeting vascular health.",
//     Function:
//       "Horse Chestnut extract strengthens veins, supports healthy circulation, and reduces swelling. It exhibits anti-inflammatory and antioxidant properties, protecting vascular and connective tissues. The herb promotes cardiovascular health and leg comfort. Regular use may alleviate discomfort from varicose veins and improve microcirculation. Horse Chestnut supports joint and tissue wellness. It enhances overall systemic vitality and resilience. Its active aescin compounds make it a key ingredient in vascular-supportive nutraceuticals and herbal formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Horse+Chestnut",
//   },

//   {
//     SrNo: 20,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Horse Chestnut",
//     ScientificName: "Aesculus hippocastanum",
//     CommonName: "Horse Chestnut",
//     StandardizedGrade: "Aescin 20%–40%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Horse Chestnut extract is traditionally used to support healthy veins, circulation, and cardiovascular function. Rich in aescin, it strengthens blood vessel walls, reduces swelling, and improves microcirculation. Historically, it has been used in Europe for chronic venous insufficiency, varicose veins, and edema. The herb exhibits anti-inflammatory and antioxidant properties, promoting systemic vascular health. Modern formulations incorporate it for leg comfort, circulation, and cardiovascular wellness. Horse Chestnut also supports joint and tissue health. Its bioactive compounds provide protective effects for circulatory and connective tissues. The extract is widely used in dietary supplements targeting vascular health.",
//     Function:
//       "Horse Chestnut extract strengthens veins, supports healthy circulation, and reduces swelling. It exhibits anti-inflammatory and antioxidant properties, protecting vascular and connective tissues. The herb promotes cardiovascular health and leg comfort. Regular use may alleviate discomfort from varicose veins and improve microcirculation. Horse Chestnut supports joint and tissue wellness. It enhances overall systemic vitality and resilience. Its active aescin compounds make it a key ingredient in vascular-supportive nutraceuticals and herbal formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Horse+Chestnut",
//   },
//   {
//     SrNo: 21,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Milk Thistle",
//     ScientificName: "Silybum marianum",
//     CommonName: "Milk Thistle",
//     StandardizedGrade: "Silymarin 30%–80%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Milk Thistle is a herb traditionally used for liver protection and detoxification. Its active compound, silymarin, has antioxidant and hepatoprotective properties that support liver cell regeneration. Historically, it has been used to maintain liver health, improve digestion, and protect against environmental toxins. The herb also supports kidney function, metabolic balance, and systemic wellness. Modern supplements use Milk Thistle extract to enhance liver resilience, detoxification processes, and antioxidant defense. It promotes overall vitality, energy levels, and healthy skin. Milk Thistle is a key ingredient in formulations targeting liver support, detox, and general wellness.",
//     Function:
//       "Milk Thistle extract protects liver cells, supports detoxification, and enhances antioxidant defense. It promotes liver regeneration and metabolic balance. The herb supports kidney function and digestive health. Regular use may improve energy, vitality, and systemic wellness. Milk Thistle exhibits anti-inflammatory properties and protects against environmental toxins. It contributes to healthy skin and overall resilience. Its silymarin content makes it a cornerstone herb in liver-supportive nutraceuticals and herbal formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Milk+Thistle",
//   },
//   {
//     SrNo: 22,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Mucuna Pruriens",
//     ScientificName: "Mucuna pruriens",
//     CommonName: "Mucuna",
//     StandardizedGrade: "L-Dopa 10%, 30%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Mucuna Pruriens is a traditional herb used to support mood, nervous system health, and male vitality. Rich in L-Dopa, it promotes dopamine synthesis, enhancing mental focus, emotional balance, and energy. Historically, it has been used in Ayurveda to support neuro-health, libido, and hormonal balance. The herb exhibits antioxidant and adaptogenic properties that reduce oxidative stress and improve resilience. Modern formulations incorporate Mucuna extract for cognitive support, mood enhancement, and systemic wellness. It supports reproductive health, metabolic balance, and overall vitality. Mucuna is highly valued for its neuroprotective and energizing effects in traditional and contemporary wellness products.",
//     Function:
//       "Mucuna extract supports dopamine production, mood regulation, and cognitive health. It enhances mental focus, emotional balance, and energy. The herb promotes male vitality, reproductive health, and hormonal balance. Regular use provides antioxidant and adaptogenic support, reducing oxidative stress. Mucuna contributes to neuroprotection and systemic wellness. It supports metabolic balance and overall vitality. Its L-Dopa content makes it a critical component in supplements targeting brain health, mood, and energy.",
//     ImageURL: "https://via.placeholder.com/150?text=Mucuna+Pruriens",
//   },
//   // Continue the same format for products 23 to 67
//   {
//     SrNo: 23,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Salacia Reticulata",
//     ScientificName: "Salacia reticulata",
//     CommonName: "Salacia",
//     StandardizedGrade: "Saponins 10%–20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Salacia Reticulata is a traditional herb used to manage blood sugar levels and support metabolic health. It contains saponins and other bioactive compounds that act as natural carbohydrate blockers, supporting healthy glucose metabolism. Historically, it has been used in Ayurveda for diabetes management, weight control, and digestive wellness. The herb exhibits antioxidant, anti-inflammatory, and adaptogenic properties. Modern supplements incorporate Salacia extract to support insulin function, energy balance, and systemic wellness. It aids in maintaining healthy cholesterol levels and cardiovascular health. Salacia also supports liver and kidney function, making it a valuable component in metabolic and general wellness formulations.",
//     Function:
//       "Salacia extract helps maintain healthy blood sugar levels and supports glucose metabolism. It acts as a natural carbohydrate blocker and supports insulin function. The herb provides antioxidant and anti-inflammatory benefits, protecting metabolic and vascular health. Regular use promotes energy balance, weight management, and systemic wellness. Salacia supports liver, kidney, and cardiovascular health. It reduces oxidative stress and contributes to overall vitality. Its bioactive compounds make it a key ingredient in diabetes-supportive nutraceuticals and wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Salacia+Reticulata",
//   },
//   {
//     SrNo: 24,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Saw Palmetto",
//     ScientificName: "Serenoa repens",
//     CommonName: "Saw Palmetto",
//     StandardizedGrade: "Fatty Acids (GC)",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Saw Palmetto is a traditional herbal extract used to support prostate health and urinary function. Rich in fatty acids and phytosterols, it helps maintain healthy hormone balance and reduce discomfort associated with benign prostatic hyperplasia. Historically, it has been used in folk medicine for male reproductive wellness and urinary tract support. The herb also exhibits anti-inflammatory and antioxidant properties, promoting systemic health. Modern formulations use Saw Palmetto extract in dietary supplements to enhance male reproductive health, hormonal balance, and urinary comfort. It supports overall vitality and energy, contributing to healthy aging. Its bioactive compounds make it a widely recognized herb in men’s health products.",
//     Function:
//       "Saw Palmetto extract supports prostate health, hormonal balance, and urinary function. It exhibits anti-inflammatory and antioxidant properties, promoting systemic wellness. The herb helps reduce discomfort associated with benign prostatic hyperplasia. Regular use may improve male reproductive health, vitality, and energy levels. Saw Palmetto contributes to urinary tract support and overall male wellness. It supports healthy hormone metabolism and systemic resilience. Its bioactive fatty acids make it a key ingredient in men’s health and wellness supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Saw+Palmetto",
//   },
//   {
//     SrNo: 25,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Senna Extract",
//     ScientificName: "Cassia angustifolia",
//     CommonName: "Senna",
//     StandardizedGrade: "Sennosides 20%–60%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Senna Extract is a natural herbal laxative used traditionally to support digestive health and bowel regularity. It contains sennosides that stimulate bowel movements, providing relief from occasional constipation. Historically, it has been used in traditional medicine to maintain gastrointestinal wellness and promote detoxification. The herb also exhibits mild anti-inflammatory properties and supports overall gut health. Modern supplements incorporate Senna extract for short-term digestive relief, cleansing programs, and supporting intestinal motility. It is valued for its efficacy, safety, and natural origin. Senna also helps in maintaining metabolic balance and energy levels.",
//     Function:
//       "Senna extract promotes bowel regularity, relieves occasional constipation, and supports digestive health. It stimulates intestinal motility and helps maintain gastrointestinal wellness. The herb exhibits mild anti-inflammatory properties and supports gut microbiome balance. Regular use assists in detoxification and maintaining metabolic health. Senna contributes to overall vitality and energy levels. It is a safe and natural solution for short-term digestive support. Its sennoside content makes it a key ingredient in digestive health supplements and herbal formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Senna+Extract",
//   },
//   // Continue the same structured format for products 26 to 67
//   {
//     SrNo: 26,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Shatavari Extract",
//     ScientificName: "Asparagus racemosus",
//     CommonName: "Shatavari",
//     StandardizedGrade: "Saponins 20%–40%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Shatavari is a revered Ayurvedic herb traditionally used to support female reproductive health and hormonal balance. Rich in saponins, it helps nourish the reproductive system, promote lactation, and enhance fertility. Historically, Shatavari has been used to rejuvenate the body, reduce stress, and support digestive health. The herb exhibits antioxidant and adaptogenic properties that support overall vitality and immune function. Modern formulations use Shatavari extract to support hormonal balance, energy, and systemic wellness. It contributes to reproductive wellness, digestive comfort, and resilience against stress. Its bioactive compounds make it a cornerstone herb in women’s health supplements.",
//     Function:
//       "Shatavari extract supports female reproductive health, hormonal balance, and lactation. It promotes fertility, digestive wellness, and overall vitality. The herb exhibits antioxidant and adaptogenic properties, reducing stress and improving systemic resilience. Regular use may enhance energy, immunity, and reproductive function. Shatavari contributes to digestive comfort, metabolic balance, and rejuvenation. It supports overall wellness and emotional balance. Its saponins make it a key ingredient in women’s health and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Shatavari+Extract",
//   },
//   {
//     SrNo: 27,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Shilajit Extract",
//     ScientificName: "Asphaltum",
//     CommonName: "Shilajit",
//     StandardizedGrade: "Fulvic Acid 20%, 70%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Shilajit is a mineral-rich resinous substance traditionally used in Ayurveda for energy, vitality, and rejuvenation. It contains fulvic acid and trace minerals that support cellular energy production, detoxification, and anti-aging. Historically, Shilajit has been used to enhance physical endurance, mental clarity, and systemic resilience. The extract exhibits antioxidant, adaptogenic, and anti-inflammatory properties. Modern nutraceuticals incorporate Shilajit for energy enhancement, cognitive support, and overall wellness. It supports metabolic health, immunity, and detoxification. Shilajit is highly valued for its rejuvenating effects and is considered a natural vitality booster.",
//     Function:
//       "Shilajit extract enhances cellular energy production, vitality, and mental clarity. It provides antioxidant and adaptogenic support, reducing oxidative stress and improving systemic resilience. The herb supports metabolic health, immunity, and detoxification processes. Regular use may enhance endurance, physical performance, and cognitive function. Shilajit contributes to anti-aging, rejuvenation, and overall wellness. It promotes energy balance, vitality, and systemic health. Its fulvic acid content makes it a key ingredient in energy-supportive and rejuvenative nutraceuticals.",
//     ImageURL: "https://via.placeholder.com/150?text=Shilajit+Extract",
//   },
//   {
//     SrNo: 28,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Tribulus Extract",
//     ScientificName: "Tribulus terrestris",
//     CommonName: "Tribulus",
//     StandardizedGrade: "Saponin 40%; Protodioscin",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Tribulus terrestris is a traditional herb widely used to support male vitality, athletic performance, and hormonal balance. Rich in saponins and protodioscin, it promotes testosterone levels, stamina, and reproductive health. Historically, it has been used in traditional medicine to enhance physical performance and energy. The herb exhibits antioxidant, adaptogenic, and anti-inflammatory properties, supporting systemic wellness. Modern supplements use Tribulus extract to improve endurance, sexual health, and overall vitality. It also supports muscle strength, metabolic balance, and immune health. Tribulus is valued in both traditional and contemporary functional wellness products.",
//     Function:
//       "Tribulus extract enhances male vitality, stamina, and hormonal balance. It supports testosterone production, reproductive health, and physical performance. The herb exhibits antioxidant and adaptogenic properties, improving systemic resilience. Regular use may enhance endurance, muscle strength, and energy levels. Tribulus contributes to metabolic balance, immunity, and overall wellness. It promotes reproductive and sexual health while supporting systemic vitality. Its saponins and protodioscin make it a key ingredient in male health and athletic performance formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Tribulus+Extract",
//   },
//   // Continue the same format for products 29 to 67
//   {
//     SrNo: 29,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Tulsi (Holy Basil)",
//     ScientificName: "Ocimum sanctum",
//     CommonName: "Tulsi",
//     StandardizedGrade: "Tannin 5%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Tulsi, or Holy Basil, is a revered herb in Ayurveda known for stress relief, respiratory support, and immune enhancement. It contains tannins and other bioactive compounds that exhibit antioxidant and adaptogenic properties. Historically, Tulsi has been used to reduce stress, support respiratory health, and promote overall vitality. The herb supports metabolic balance, cardiovascular wellness, and general systemic resilience. Modern supplements incorporate Tulsi extract for stress management, immunity, and respiratory comfort. It also aids in maintaining healthy blood sugar and hormonal balance. Tulsi is highly valued in functional wellness and holistic healthcare formulations.",
//     Function:
//       "Tulsi extract reduces stress, supports immunity, and promotes respiratory health. It provides antioxidant and adaptogenic support for overall systemic resilience. The herb aids in metabolic balance, hormonal health, and cardiovascular wellness. Regular use enhances vitality, energy levels, and mental clarity. Tulsi also supports respiratory comfort and healthy blood sugar levels. It contributes to overall well-being and emotional balance. Its bioactive tannins make it a cornerstone in stress-relief and wellness supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Tulsi",
//   },
//   {
//     SrNo: 30,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Valerian Extract",
//     ScientificName: "Valeriana officinalis",
//     CommonName: "Valerian",
//     StandardizedGrade: "Valerianic Acid 0.8%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Valerian extract is a traditional herb used to promote relaxation, calmness, and restful sleep. It contains valerianic acid and other bioactive compounds that act on the nervous system to reduce anxiety and stress. Historically, it has been used in folk medicine for sleep disorders, tension relief, and emotional balance. The herb exhibits antioxidant and adaptogenic properties, supporting systemic wellness. Modern formulations incorporate Valerian extract to improve sleep quality, reduce nervous tension, and enhance mental relaxation. It also aids in mood regulation, stress management, and overall vitality. Valerian is a key ingredient in sleep-supportive and calming herbal supplements.",
//     Function:
//       "Valerian extract promotes relaxation, restful sleep, and reduces anxiety. It supports nervous system health and emotional balance. The herb exhibits antioxidant and adaptogenic properties, improving systemic resilience. Regular use may enhance sleep quality, mood regulation, and stress management. Valerian contributes to mental clarity, energy balance, and overall wellness. It supports calmness, tension relief, and restorative rest. Its valerianic acid makes it a key component in sleep and relaxation formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Valerian+Extract",
//   },
//   {
//     SrNo: 31,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "White Kidney Bean",
//     ScientificName: "Phaseolus vulgaris",
//     CommonName: "White Kidney Bean",
//     StandardizedGrade: "Alpha-amylase inhibitory 11000 U/g",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "White Kidney Bean extract is a natural plant-based supplement traditionally used to support healthy carbohydrate metabolism and weight management. It contains alpha-amylase inhibitors that reduce carbohydrate absorption and support glycemic control. Historically, it has been used to maintain metabolic balance, digestive health, and weight regulation. The extract exhibits antioxidant and anti-inflammatory properties, promoting overall wellness. Modern supplements use White Kidney Bean extract for starch blocking, healthy weight management, and systemic metabolic support. It also contributes to cardiovascular and digestive health. The extract is widely valued in functional nutrition and weight management formulations.",
//     Function:
//       "White Kidney Bean extract helps block carbohydrate absorption and supports healthy blood sugar levels. It promotes weight management, digestive health, and metabolic balance. The herb exhibits antioxidant and anti-inflammatory properties, protecting systemic wellness. Regular use supports energy metabolism, cardiovascular health, and systemic vitality. It aids in controlling calorie intake and maintaining healthy body composition. White Kidney Bean extract contributes to overall wellness and metabolic resilience. Its alpha-amylase inhibitors make it a key ingredient in weight management and nutritional supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=White+Kidney+Bean",
//   },
//   {
//     SrNo: 32,
//     Category: "Herbal & Botanical Extracts",
//     ProductName: "Yohimbine",
//     ScientificName: "Pausinystalia yohimbe",
//     CommonName: "Yohimbine",
//     StandardizedGrade: "Yohimbine 1%–98%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Yohimbine is a traditional herbal extract used to support fat metabolism, energy, and sexual health. Its active compound, yohimbine, promotes blood flow, enhances energy, and aids in weight management. Historically, it has been used to improve stamina, male vitality, and overall endurance. The herb exhibits antioxidant and adaptogenic properties, supporting systemic health. Modern nutraceuticals incorporate Yohimbine extract for fat burning, energy enhancement, and sexual wellness. It also supports metabolic balance, cardiovascular function, and systemic vitality. Yohimbine remains highly valued in traditional and contemporary wellness formulations.",
//     Function:
//       "Yohimbine extract enhances fat metabolism, energy levels, and sexual health. It promotes blood circulation, stamina, and systemic vitality. The herb exhibits antioxidant and adaptogenic properties, supporting overall wellness. Regular use may aid weight management, endurance, and male vitality. Yohimbine contributes to metabolic balance, cardiovascular function, and hormonal health. It supports physical performance and systemic resilience. Its bioactive yohimbine content makes it a key ingredient in fat-burning and sexual wellness supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Yohimbine",
//   },
//   {
//     SrNo: 33,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Cinnamon Extract",
//     ScientificName: "Cinnamomum cassia",
//     CommonName: "Cinnamon",
//     StandardizedGrade: "Polyphenols 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Cinnamon extract is rich in polyphenols and is traditionally used to support healthy blood sugar, metabolism, and antioxidant defense. Historically, it has been used to improve digestion, reduce inflammation, and promote systemic wellness. The herb exhibits strong antioxidant, anti-inflammatory, and antimicrobial properties. Modern formulations incorporate Cinnamon extract to support cardiovascular health, metabolic balance, and immune function. It also aids in reducing oxidative stress and promoting digestive comfort. Cinnamon extract is widely used in nutraceuticals, dietary supplements, and functional foods. Its bioactive compounds enhance energy metabolism and overall vitality.",
//     Function:
//       "Cinnamon extract supports healthy blood sugar levels and metabolism. It provides antioxidant and anti-inflammatory benefits, reducing oxidative stress. The herb promotes cardiovascular and digestive health. Regular use enhances immune function and energy metabolism. Cinnamon also supports systemic wellness and reduces inflammation. Its polyphenols make it a key ingredient in metabolic, cardiovascular, and antioxidant-focused supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Cinnamon+Extract",
//   },
//   {
//     SrNo: 34,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Citrus Bioflavonoids",
//     ScientificName: "Citrus sinensis",
//     CommonName: "Citrus Bioflavonoids",
//     StandardizedGrade: "Hesperidin 40%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Citrus Bioflavonoids are concentrated plant compounds used to support vitamin C absorption, circulation, and antioxidant defense. They exhibit strong antioxidant, anti-inflammatory, and cardiovascular-supporting properties. Historically, they have been used to enhance immunity, support blood vessel health, and improve systemic vitality. Modern supplements incorporate Citrus Bioflavonoids to strengthen capillaries, promote cardiovascular wellness, and enhance immune function. They also help reduce oxidative stress, improve skin health, and support metabolic balance. The bioactive flavonoids are highly valued in nutraceuticals and functional foods.",
//     Function:
//       "Citrus Bioflavonoids support vitamin C absorption, antioxidant defense, and cardiovascular health. They promote blood circulation, reduce oxidative stress, and enhance immune function. Regular use improves skin health, metabolic balance, and systemic wellness. The flavonoids exhibit anti-inflammatory properties and contribute to capillary strength. They support overall vitality, resilience, and functional wellness. Citrus Bioflavonoids are essential in antioxidant and immunity-supportive formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Citrus+Bioflavonoids",
//   },
//   {
//     SrNo: 35,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Curcuminoids",
//     ScientificName: "Curcuma longa",
//     CommonName: "Turmeric",
//     StandardizedGrade: "Curcuminoids 5%–95%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Curcuminoids from Turmeric are potent antioxidant and anti-inflammatory compounds traditionally used to support joint health, digestion, and systemic wellness. Historically, Turmeric has been used in Ayurvedic and traditional medicine for inflammation, pain relief, and detoxification. The extract exhibits strong antioxidant, anti-inflammatory, and hepatoprotective properties. Modern nutraceuticals incorporate Curcuminoids for cardiovascular support, cognitive health, and immune function. It promotes overall vitality, metabolic balance, and cellular protection. Curcuminoids are widely used in dietary supplements, functional foods, and joint health formulations. They help reduce oxidative stress and improve systemic resilience.",
//     Function:
//       "Curcuminoids provide antioxidant and anti-inflammatory support. They promote joint health, metabolic balance, and digestive wellness. The herb supports cognitive function, cardiovascular health, and immune defense. Regular use reduces oxidative stress and inflammation, improving systemic resilience. Curcuminoids enhance cellular protection, energy, and vitality. They are widely used in nutraceuticals, functional foods, and wellness supplements to promote overall health.",
//     ImageURL: "https://via.placeholder.com/150?text=Curcuminoids",
//   },
//   {
//     SrNo: 36,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Grape Seed Extract",
//     ScientificName: "Vitis vinifera",
//     CommonName: "Grape Seed",
//     StandardizedGrade: "Procyanidins/OPC 60%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Grape Seed extract is rich in oligomeric proanthocyanidins (OPCs) and has potent antioxidant properties. Traditionally, it has been used to support cardiovascular health, improve circulation, and protect connective tissues. The extract exhibits anti-inflammatory, antioxidant, and vascular protective effects. Modern supplements incorporate Grape Seed extract to enhance collagen production, support skin and vessel health, and reduce oxidative stress. It also supports metabolic balance, immunity, and systemic wellness. Grape Seed extract is widely used in nutraceuticals and functional foods for antioxidant and heart-supportive formulations.",
//     Function:
//       "Grape Seed extract provides powerful antioxidant protection and supports cardiovascular health. It improves circulation, strengthens blood vessels, and supports collagen production. The extract reduces oxidative stress, promotes metabolic balance, and enhances immunity. Regular use contributes to skin health, connective tissue support, and overall systemic wellness. It exhibits anti-inflammatory properties and aids in tissue repair. Grape Seed extract is essential in heart health, antioxidant, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Grape+Seed+Extract",
//   },
//   {
//     SrNo: 37,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Green Coffee Bean",
//     ScientificName: "Coffea arabica",
//     CommonName: "Green Coffee",
//     StandardizedGrade: "Chlorogenic Acid 50%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Green Coffee Bean extract is rich in chlorogenic acids and is traditionally used to support weight management, metabolism, and antioxidant defense. Historically, it has been used to reduce fat accumulation, improve energy levels, and promote systemic wellness. The extract exhibits antioxidant, anti-inflammatory, and metabolic regulatory properties. Modern supplements incorporate Green Coffee extract for fat metabolism, blood sugar support, and energy enhancement. It also supports cardiovascular and digestive health. Green Coffee is widely used in weight management, functional foods, and nutraceutical formulations. Its bioactive compounds contribute to overall vitality, systemic resilience, and metabolic balance.",
//     Function:
//       "Green Coffee extract supports weight management, fat metabolism, and metabolic balance. It provides antioxidant and anti-inflammatory benefits, reducing oxidative stress. The herb enhances energy, systemic resilience, and digestive health. Regular use may improve cardiovascular function and blood sugar regulation. Green Coffee extract contributes to overall vitality, energy levels, and metabolic wellness. Its chlorogenic acids make it a key ingredient in weight management, antioxidant, and functional wellness supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Green+Coffee+Bean",
//   },
//   {
//     SrNo: 38,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Green Tea Extract",
//     ScientificName: "Camellia sinensis",
//     CommonName: "Green Tea",
//     StandardizedGrade: "Polyphenols 50% & 98%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Green Tea extract is rich in polyphenols, catechins, and EGCG, traditionally used to support antioxidant defense, metabolism, and cardiovascular wellness. Historically, it has been used to improve energy, digestion, and mental clarity. The extract exhibits strong antioxidant, anti-inflammatory, and metabolic regulatory properties. Modern supplements incorporate Green Tea extract for weight management, fat oxidation, cognitive support, and systemic wellness. It also supports immune function, skin health, and vascular protection. Green Tea extract is widely used in nutraceuticals, functional beverages, and wellness formulations for its broad health benefits.",
//     Function:
//       "Green Tea extract provides potent antioxidant protection, supports metabolism, and cardiovascular health. It enhances fat oxidation, weight management, and cognitive function. The herb exhibits anti-inflammatory properties, promotes systemic wellness, and strengthens immunity. Regular use supports skin health, energy balance, and vascular protection. Green Tea extract contributes to detoxification and overall vitality. Its catechins and EGCG make it a key ingredient in weight management, antioxidant, and cognitive support supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Green+Tea+Extract",
//   },
//   {
//     SrNo: 39,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Pine Bark Extract",
//     ScientificName: "Pinus massoniana",
//     CommonName: "Pine Bark",
//     StandardizedGrade: "Proanthocyanidin 95%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Pine Bark extract is a potent antioxidant traditionally used to support cardiovascular health, circulation, and vascular integrity. Rich in proanthocyanidins, it helps protect blood vessels, improve microcirculation, and reduce oxidative stress. Historically, it has been used for skin health, anti-aging, and metabolic support. Modern nutraceuticals incorporate Pine Bark extract for cardiovascular wellness, antioxidant defense, and systemic vitality. It also supports cognitive function, immune health, and tissue protection. The extract promotes overall wellness, energy levels, and resilience. Pine Bark is widely used in dietary supplements and functional foods for its comprehensive health benefits.",
//     Function:
//       "Pine Bark extract supports cardiovascular health, circulation, and vascular integrity. It provides potent antioxidant protection, reducing oxidative stress and improving tissue resilience. The extract enhances skin health, cognitive function, and immune support. Regular use may promote energy, metabolic balance, and overall systemic wellness. Pine Bark contributes to anti-aging, vascular protection, and cellular health. Its proanthocyanidins make it a key ingredient in cardiovascular, antioxidant, and wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Pine+Bark+Extract",
//   },
//   {
//     SrNo: 40,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Quercetin",
//     ScientificName: "Sophora japonica",
//     CommonName: "Quercetin",
//     StandardizedGrade: "95%, 98%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Quercetin is a flavonoid-rich extract traditionally used to support immune function, cardiovascular health, and antioxidant defense. It exhibits strong anti-inflammatory and antihistamine properties. Historically, Quercetin has been used to reduce oxidative stress, support blood vessel health, and improve energy. Modern supplements incorporate Quercetin to support immunity, allergy relief, metabolic balance, and systemic resilience. It also aids in vascular integrity, cognitive function, and skin health. Quercetin extract is widely used in nutraceuticals, functional foods, and wellness formulations for its broad health benefits.",
//     Function:
//       "Quercetin extract provides antioxidant, anti-inflammatory, and immune-supportive effects. It supports cardiovascular health, reduces oxidative stress, and promotes energy and systemic resilience. The herb aids in allergy relief, vascular integrity, and skin health. Regular use contributes to metabolic balance, cognitive support, and overall wellness. Quercetin is essential in antioxidant, immunity, and cardiovascular-focused supplements.",
//     ImageURL: "https://via.placeholder.com/150?text=Quercetin",
//   },
//   {
//     SrNo: 41,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Resveratrol",
//     ScientificName: "Polygonum cuspidatum",
//     CommonName: "Resveratrol",
//     StandardizedGrade: "50%–98%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Resveratrol is a polyphenolic compound traditionally used for cardiovascular support, anti-aging, and antioxidant protection. Found in plants like Polygonum cuspidatum, it promotes vascular health, metabolic balance, and systemic resilience. Historically, it has been used to improve circulation, reduce oxidative stress, and support longevity. Modern nutraceuticals incorporate Resveratrol for heart health, cognitive function, and anti-inflammatory support. It also enhances skin health, immune function, and cellular protection. Resveratrol extract is widely used in dietary supplements and functional foods for its broad-spectrum health benefits.",
//     Function:
//       "Resveratrol extract supports cardiovascular health, antioxidant defense, and metabolic balance. It reduces oxidative stress, promotes vascular health, and enhances systemic resilience. The herb supports cognitive function, skin health, and immune wellness. Regular use contributes to anti-aging, energy balance, and overall vitality. Resveratrol is a key ingredient in cardiovascular, antioxidant, and longevity-focused formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Resveratrol",
//   },
//   {
//     SrNo: 42,
//     Category: "Antioxidants & Polyphenols",
//     ProductName: "Rosemary Extract",
//     ScientificName: "Rosmarinus officinalis",
//     CommonName: "Rosemary",
//     StandardizedGrade: "Carnosic Acid 5%–98%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Rosemary extract is traditionally used for its antioxidant, anti-inflammatory, and preservative properties. Rich in carnosic acid, it supports cardiovascular health, cognitive function, and systemic wellness. Historically, it has been used to improve circulation, digestion, and energy levels. Modern nutraceuticals incorporate Rosemary extract for its protective effects on the liver, skin, and immune system. It also supports metabolic balance and overall vitality. Rosemary is widely used in dietary supplements, functional foods, and herbal formulations for its comprehensive health benefits.",
//     Function:
//       "Rosemary extract provides antioxidant and anti-inflammatory support. It promotes cardiovascular health, cognitive function, and systemic wellness. The herb enhances metabolism, energy, and immune defense. Regular use may improve circulation, skin health, and liver protection. Rosemary contributes to overall vitality and cellular resilience. Its carnosic acid content makes it essential in antioxidant, cognitive, and wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Rosemary+Extract",
//   },
//   {
//     SrNo: 43,
//     Category: "Carotenoids & Natural Pigments",
//     ProductName: "Astaxanthin",
//     ScientificName: "Haematococcus pluvialis",
//     CommonName: "Astaxanthin",
//     StandardizedGrade: "Astaxanthin 2%, 10%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Astaxanthin is a powerful natural antioxidant derived from microalgae, traditionally used to support eye health, skin protection, and systemic wellness. It exhibits strong free radical scavenging properties, supporting cardiovascular health and reducing oxidative stress. Historically, it has been used to enhance endurance, immunity, and energy levels. Modern nutraceuticals incorporate Astaxanthin for skin hydration, eye protection, anti-aging, and immune support. It promotes cellular health, metabolic balance, and systemic vitality. Astaxanthin is widely used in dietary supplements and functional foods for its comprehensive health benefits.",
//     Function:
//       "Astaxanthin extract provides potent antioxidant protection, supports eye and skin health, and reduces oxidative stress. It promotes cardiovascular wellness, energy levels, and immune defense. Regular use enhances cellular health, metabolic balance, and systemic vitality. Astaxanthin also supports endurance, anti-aging, and overall wellness. Its strong free radical scavenging properties make it a key ingredient in antioxidant and functional health formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Astaxanthin",
//   },
//   {
//     SrNo: 44,
//     Category: "Carotenoids & Natural Pigments",
//     ProductName: "Beta Carotene",
//     ScientificName: "Dunaliella salina",
//     CommonName: "Beta Carotene",
//     StandardizedGrade: "Beta Carotene 10%, 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Beta Carotene is a pro-vitamin A carotenoid traditionally used to support vision, immunity, and antioxidant defense. Rich in natural pigments, it promotes eye health, skin protection, and systemic wellness. Historically, it has been used to prevent vitamin A deficiency, support growth, and improve metabolic function. Modern supplements incorporate Beta Carotene for immune support, antioxidant defense, and skin health. It contributes to cellular protection, metabolic balance, and overall vitality. Beta Carotene is widely used in dietary supplements, functional foods, and nutraceuticals for its broad-spectrum health benefits.",
//     Function:
//       "Beta Carotene extract supports vision, immunity, and antioxidant defense. It promotes skin protection, metabolic balance, and systemic wellness. Regular use enhances cellular protection, eye health, and energy levels. The carotenoid also contributes to immune support and overall vitality. Beta Carotene is essential in antioxidant, eye health, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Beta+Carotene",
//   },
//   {
//     SrNo: 45,
//     Category: "Carotenoids & Natural Pigments",
//     ProductName: "Marigold Extract",
//     ScientificName: "Tagetes erecta",
//     CommonName: "Marigold",
//     StandardizedGrade: "Lutein 5%–20%; Zeaxanthin 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Marigold extract is rich in lutein and zeaxanthin, carotenoids traditionally used to support eye health, macular protection, and systemic wellness. Historically, it has been used to improve vision, reduce oxidative stress, and protect against light-induced damage. The extract exhibits antioxidant and anti-inflammatory properties. Modern supplements incorporate Marigold extract for eye health, skin protection, and cardiovascular wellness. It also supports metabolic balance, cognitive function, and cellular vitality. Marigold extract is widely used in nutraceuticals, functional foods, and wellness formulations.",
//     Function:
//       "Marigold extract supports eye health, macular protection, and antioxidant defense. It promotes vision, skin health, and systemic wellness. Regular use enhances cellular protection, cognitive function, and metabolic balance. The carotenoids lutein and zeaxanthin reduce oxidative stress and support overall vitality. Marigold extract is a key ingredient in eye health, antioxidant, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Marigold+Extract",
//   },
//   {
//     SrNo: 46,
//     Category: "Carotenoids & Natural Pigments",
//     ProductName: "Lycopene",
//     ScientificName: "Solanum lycopersicum",
//     CommonName: "Lycopene",
//     StandardizedGrade: "Standardized Powder",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Lycopene is a carotenoid-rich extract traditionally used to support heart health, prostate wellness, and antioxidant defense. It exhibits strong antioxidant properties, protecting cells from oxidative damage and supporting cardiovascular function. Historically, Lycopene has been used to reduce inflammation, improve skin health, and enhance systemic resilience. Modern supplements incorporate Lycopene extract for heart health, prostate support, skin protection, and overall wellness. It promotes metabolic balance, immune function, and cellular vitality. Lycopene is widely used in nutraceuticals, functional foods, and dietary supplements.",
//     Function:
//       "Lycopene extract provides antioxidant protection, supports cardiovascular and prostate health, and promotes cellular resilience. It enhances skin protection, metabolic balance, and systemic wellness. Regular use reduces oxidative stress and inflammation, supporting overall vitality. Lycopene is a key ingredient in heart health, prostate wellness, and antioxidant formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Lycopene",
//   },
//   {
//     SrNo: 47,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Acai Berry Extract",
//     ScientificName: "Euterpe oleracea",
//     CommonName: "Acai Berry",
//     StandardizedGrade: "Polyphenols / Vit C 5%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Acai Berry extract is rich in antioxidants and traditionally used to support overall wellness, immune function, and metabolic health. Historically, it has been used to enhance energy, reduce oxidative stress, and promote vitality. Modern nutraceuticals incorporate Acai extract for antioxidant defense, cardiovascular support, and skin health. It also supports digestive health, cellular protection, and systemic resilience. Acai Berry is widely used in functional foods, beverages, and dietary supplements for its comprehensive health benefits.",
//     Function:
//       "Acai Berry extract provides potent antioxidant support, enhances immunity, and promotes metabolic health. It improves energy levels, cellular protection, and digestive wellness. Regular use supports cardiovascular health, skin vitality, and overall systemic resilience. Acai is a key ingredient in antioxidant-rich and wellness-focused formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Acai+Berry+Extract",
//   },
//   {
//     SrNo: 48,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Acerola Cherry",
//     ScientificName: "Malpighia glabra",
//     CommonName: "Acerola",
//     StandardizedGrade: "Vitamin C 17% & 25%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Acerola Cherry extract is a natural source of highly bioavailable Vitamin C, traditionally used to support immunity, antioxidant defense, and overall wellness. Historically, it has been used to combat fatigue, promote vitality, and strengthen resistance to infections. Modern supplements incorporate Acerola extract for immune enhancement, antioxidant protection, skin health, and metabolic support. It also aids in collagen synthesis, cellular resilience, and systemic wellness. Acerola Cherry is widely used in functional foods, beverages, and nutraceuticals for its concentrated Vitamin C benefits.",
//     Function:
//       "Acerola Cherry extract boosts immunity, provides antioxidant protection, and supports overall wellness. It enhances skin health, collagen formation, and cellular resilience. Regular use promotes energy, metabolic balance, and systemic vitality. Acerola is a key ingredient in immune-supportive, antioxidant, and functional health formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Acerola+Cherry",
//   },
//   {
//     SrNo: 49,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Amala Extract",
//     ScientificName: "Emblica officinalis",
//     CommonName: "Amla",
//     StandardizedGrade: "Tannins 30%–50%; Vit C 50%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Amala (Amla) extract is rich in Vitamin C and tannins, traditionally used to support immunity, antioxidant defense, and overall wellness. Historically, it has been used to rejuvenate the body, improve digestion, and support metabolic balance. Modern nutraceuticals incorporate Amla extract for immune enhancement, cardiovascular support, skin health, and digestive wellness. It also promotes systemic vitality, cellular protection, and oxidative stress reduction. Amla extract is widely used in dietary supplements, functional foods, and Ayurvedic formulations for comprehensive health benefits.",
//     Function:
//       "Amala extract enhances immunity, provides antioxidant protection, and supports overall wellness. It promotes digestive health, metabolic balance, and cardiovascular support. Regular use improves energy levels, skin vitality, and cellular resilience. Amla is a key ingredient in immune-supportive, antioxidant-rich, and holistic wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Amala+Extract",
//   },
//   {
//     SrNo: 50,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Apple Cider Vinegar",
//     ScientificName: "Malus pumila",
//     CommonName: "Apple Cider Vinegar",
//     StandardizedGrade: "Powder 5%, 10%, 15%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Apple Cider Vinegar powder is traditionally used to support digestion, metabolic balance, and overall wellness. It contains organic acids and bioactive compounds that enhance gut health, support weight management, and improve nutrient absorption. Historically, it has been used for detoxification, digestive comfort, and metabolic regulation. Modern nutraceuticals incorporate ACV powder for gut health, energy metabolism, and systemic vitality. It also supports cardiovascular wellness, immune function, and antioxidant defense. Apple Cider Vinegar powder is widely used in dietary supplements, functional beverages, and wellness formulations.",
//     Function:
//       "Apple Cider Vinegar powder supports digestive health, metabolic balance, and overall systemic wellness. It promotes nutrient absorption, energy metabolism, and detoxification. Regular use enhances gut health, cardiovascular function, and immune support. ACV powder is a key ingredient in weight management, digestive wellness, and functional health formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Apple+Cider+Vinegar",
//   },
//   {
//     SrNo: 51,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Beet Extract",
//     ScientificName: "Beta vulgaris",
//     CommonName: "Beet",
//     StandardizedGrade: "10:1 Ratio",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Beet Extract is traditionally used to support nitric oxide production, cardiovascular health, and athletic performance. Rich in nitrates and antioxidants, it promotes circulation, energy metabolism, and endurance. Historically, it has been used for improving stamina, reducing fatigue, and enhancing systemic wellness. Modern nutraceuticals incorporate Beet extract for blood flow support, cardiovascular wellness, and antioxidant defense. It also supports cognitive function, metabolic balance, and cellular vitality. Beet Extract is widely used in functional foods, sports nutrition, and dietary supplements.",
//     Function:
//       "Beet extract enhances nitric oxide production, supports cardiovascular health, and improves circulation. It boosts energy metabolism, endurance, and athletic performance. Regular use promotes cognitive function, metabolic balance, and systemic wellness. Beet Extract is a key ingredient in sports nutrition, antioxidant, and heart health formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Beet+Extract",
//   },
//   {
//     SrNo: 52,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Bitter Melon",
//     ScientificName: "Momordica charantia",
//     CommonName: "Bitter Melon",
//     StandardizedGrade: "Bitters 10%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Bitter Melon extract is traditionally used to support healthy blood glucose levels and metabolic balance. Rich in bioactive compounds, it promotes insulin regulation, digestion, and antioxidant defense. Historically, it has been used to manage blood sugar, support liver function, and enhance systemic wellness. Modern supplements incorporate Bitter Melon for glycemic support, immune function, and metabolic health. It also aids in detoxification, digestive comfort, and overall vitality. Bitter Melon is widely used in nutraceuticals, functional foods, and wellness formulations.",
//     Function:
//       "Bitter Melon extract supports healthy blood sugar levels, metabolic balance, and digestive wellness. It enhances insulin regulation, antioxidant defense, and systemic resilience. Regular use promotes liver function, energy balance, and overall vitality. Bitter Melon is a key ingredient in diabetes support, metabolic health, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Bitter+Melon",
//   },
//   {
//     SrNo: 53,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Cranberry Extract",
//     ScientificName: "Vaccinium macrocarpon",
//     CommonName: "Cranberry",
//     StandardizedGrade: "Proanthocyanidins 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Cranberry extract is traditionally used to support urinary tract health, antioxidant defense, and immune function. Rich in proanthocyanidins, it helps prevent bacterial adhesion, promote kidney health, and reduce oxidative stress. Historically, it has been used to improve bladder function, metabolic balance, and systemic wellness. Modern nutraceuticals incorporate Cranberry extract for urinary tract support, cardiovascular wellness, and antioxidant protection. It also enhances digestive health, immune resilience, and overall vitality. Cranberry Extract is widely used in dietary supplements, functional foods, and beverages.",
//     Function:
//       "Cranberry extract supports urinary tract health, antioxidant defense, and immune function. It promotes bladder and kidney wellness, reduces oxidative stress, and enhances systemic vitality. Regular use improves metabolic balance and overall wellness. Cranberry is a key ingredient in urinary, antioxidant, and functional health formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Cranberry+Extract",
//   },
//   {
//     SrNo: 54,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Elderberry Extract",
//     ScientificName: "Sambucus nigra",
//     CommonName: "Elderberry",
//     StandardizedGrade: "Anthocyanins 5%–25%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Elderberry extract is traditionally used to support immune function, antioxidant defense, and overall wellness. Rich in anthocyanins and flavonoids, it promotes respiratory health, reduces oxidative stress, and enhances systemic resilience. Historically, it has been used to combat colds, flu, and infections while supporting metabolic balance. Modern supplements incorporate Elderberry extract for immune enhancement, antioxidant protection, and cardiovascular wellness. It also supports skin health, energy, and cellular vitality. Elderberry is widely used in dietary supplements, functional foods, and beverages.",
//     Function:
//       "Elderberry extract enhances immune function, provides antioxidant support, and promotes respiratory wellness. It reduces oxidative stress, supports metabolic balance, and improves energy levels. Regular use contributes to systemic resilience, cardiovascular support, and skin health. Elderberry is a key ingredient in immunity, antioxidant, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Elderberry+Extract",
//   },
//   {
//     SrNo: 55,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Garlic Extract",
//     ScientificName: "Allium sativum",
//     CommonName: "Garlic",
//     StandardizedGrade: "Allicin 1%–5%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Garlic extract is traditionally used to support cardiovascular health, immune defense, and antioxidant protection. Rich in allicin, it promotes blood circulation, reduces oxidative stress, and enhances systemic wellness. Historically, it has been used to improve metabolic function, combat infections, and support detoxification. Modern nutraceuticals incorporate Garlic extract for heart health, immune support, and antioxidant defense. It also aids in cholesterol regulation, energy metabolism, and overall vitality. Garlic is widely used in dietary supplements, functional foods, and wellness formulations.",
//     Function:
//       "Garlic extract supports cardiovascular health, immune defense, and antioxidant protection. It promotes blood circulation, metabolic balance, and systemic wellness. Regular use reduces oxidative stress, supports energy levels, and enhances vitality. Garlic is a key ingredient in heart health, immunity, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Garlic+Extract",
//   },
//   {
//     SrNo: 56,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Ginger Extract",
//     ScientificName: "Zingiber officinale",
//     CommonName: "Ginger",
//     StandardizedGrade: "Gingerols 2.5%, 5%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Ginger extract is traditionally used to support digestion, reduce nausea, and promote antioxidant and anti-inflammatory effects. Rich in gingerols, it enhances metabolic balance, circulatory function, and systemic wellness. Historically, it has been used to improve gastrointestinal comfort, immune defense, and energy levels. Modern supplements incorporate Ginger extract for digestive support, anti-inflammatory effects, and overall vitality. It also promotes cardiovascular wellness, immunity, and antioxidant protection. Ginger extract is widely used in dietary supplements, functional foods, and beverages.",
//     Function:
//       "Ginger extract supports digestion, reduces nausea, and provides antioxidant and anti-inflammatory benefits. It enhances metabolic balance, circulatory health, and systemic vitality. Regular use promotes energy, immune function, and overall wellness. Ginger is a key ingredient in digestive, anti-inflammatory, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Ginger+Extract",
//   },
//   {
//     SrNo: 57,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Jamun Extract",
//     ScientificName: "Syzygium cumini",
//     CommonName: "Jamun",
//     StandardizedGrade: "10:1 Ratio",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Jamun extract is traditionally used to support blood sugar management, metabolic balance, and antioxidant defense. Rich in bioactive compounds, it promotes glycemic control, cardiovascular health, and systemic wellness. Historically, it has been used to improve digestive comfort, reduce oxidative stress, and enhance energy levels. Modern nutraceuticals incorporate Jamun extract for metabolic support, immune function, and antioxidant protection. It also supports liver health, circulation, and overall vitality. Jamun is widely used in dietary supplements, functional foods, and wellness formulations.",
//     Function:
//       "Jamun extract supports blood sugar management, metabolic balance, and antioxidant defense. It promotes glycemic control, cardiovascular wellness, and systemic resilience. Regular use enhances digestion, liver health, and energy levels. Jamun is a key ingredient in diabetes support, metabolic health, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Jamun+Extract",
//   },
//   {
//     SrNo: 58,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Moringa Extract",
//     ScientificName: "Moringa oleifera",
//     CommonName: "Moringa",
//     StandardizedGrade: "Saponins 10%, 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Moringa extract is nutrient-dense and traditionally used to support energy, immunity, and antioxidant defense. Rich in saponins, vitamins, and minerals, it promotes overall wellness, metabolic balance, and systemic resilience. Historically, it has been used to combat fatigue, enhance vitality, and support digestive health. Modern nutraceuticals incorporate Moringa extract for immune enhancement, antioxidant support, cardiovascular wellness, and cellular protection. It also promotes skin health, energy, and metabolic function. Moringa is widely used in dietary supplements, functional foods, and wellness formulations.",
//     Function:
//       "Moringa extract supports energy, immunity, and antioxidant defense. It enhances metabolic balance, systemic resilience, and overall wellness. Regular use promotes digestive health, cardiovascular function, and cellular protection. Moringa is a key ingredient in nutrient-rich, antioxidant, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Moringa+Extract",
//   },
//   {
//     SrNo: 59,
//     Category: "Fruit, Vegetable & Plant Powders",
//     ProductName: "Pomegranate Extract",
//     ScientificName: "Punica granatum",
//     CommonName: "Pomegranate",
//     StandardizedGrade: "Punicalagins 40%–60%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Pomegranate extract is traditionally used to support cardiovascular health, antioxidant defense, and overall wellness. Rich in punicalagins and polyphenols, it promotes heart health, reduces oxidative stress, and enhances systemic resilience. Historically, it has been used to improve metabolic balance, skin health, and energy levels. Modern nutraceuticals incorporate Pomegranate extract for immune support, antioxidant protection, and cellular vitality. It also aids in digestive health, circulation, and overall systemic wellness. Pomegranate is widely used in dietary supplements, functional foods, and beverages.",
//     Function:
//       "Pomegranate extract supports cardiovascular health, antioxidant defense, and systemic wellness. It reduces oxidative stress, promotes energy levels, and enhances immune function. Regular use supports metabolic balance, skin health, and cellular vitality. Pomegranate is a key ingredient in heart health, antioxidant, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Pomegranate+Extract",
//   },
//   {
//     SrNo: 60,
//     Category: "Mushroom Extracts",
//     ProductName: "Cordyceps Extract",
//     ScientificName: "Cordyceps sinensis",
//     CommonName: "Cordyceps",
//     StandardizedGrade: "Polysaccharides 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Cordyceps extract is traditionally used to support energy production, endurance, and immune function. Rich in polysaccharides, it promotes ATP synthesis, oxygen utilization, and systemic vitality. Historically, it has been used to enhance stamina, respiratory function, and overall wellness. Modern nutraceuticals incorporate Cordyceps extract for athletic performance, energy metabolism, and immune resilience. It also supports cardiovascular health, antioxidant defense, and recovery. Cordyceps is widely used in dietary supplements, functional foods, and sports nutrition formulations.",
//     Function:
//       "Cordyceps extract supports energy production, endurance, and immune function. It enhances ATP synthesis, oxygen utilization, and systemic vitality. Regular use promotes cardiovascular health, recovery, and antioxidant defense. Cordyceps is a key ingredient in sports nutrition, energy, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Cordyceps+Extract",
//   },
//   {
//     SrNo: 61,
//     Category: "Mushroom Extracts",
//     ProductName: "Reishi Extract",
//     ScientificName: "Ganoderma lucidum",
//     CommonName: "Reishi",
//     StandardizedGrade: "Polysaccharides 30%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Reishi extract is traditionally used as a calming adaptogen, supporting immune function, cardiovascular health, and systemic resilience. Rich in polysaccharides and triterpenes, it promotes antioxidant defense, stress reduction, and overall wellness. Historically, it has been used to improve sleep, enhance immunity, and support longevity. Modern nutraceuticals incorporate Reishi extract for immune enhancement, heart health, and stress adaptation. It also supports liver function, cognitive wellness, and cellular vitality. Reishi is widely used in dietary supplements, functional foods, and herbal formulations.",
//     Function:
//       "Reishi extract provides adaptogenic, immune-supportive, and antioxidant benefits. It promotes cardiovascular health, stress reduction, and systemic resilience. Regular use enhances sleep quality, liver function, and overall vitality. Reishi is a key ingredient in immune, adaptogen, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Reishi+Extract",
//   },
//   {
//     SrNo: 62,
//     Category: "Mushroom Extracts",
//     ProductName: "Lion's Mane",
//     ScientificName: "Hericium erinaceus",
//     CommonName: "Lion's Mane",
//     StandardizedGrade: "Polysaccharides 20%–30%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Lion's Mane extract is traditionally used to support nerve growth, cognitive function, and mental clarity. Rich in polysaccharides and bioactive compounds, it promotes neuroprotection, antioxidant defense, and systemic wellness. Historically, it has been used to enhance memory, focus, and overall brain health. Modern supplements incorporate Lion's Mane extract for cognitive support, nervous system resilience, and overall vitality. It also supports immune function, metabolic balance, and cellular protection. Lion's Mane is widely used in dietary supplements, functional foods, and nootropic formulations.",
//     Function:
//       "Lion's Mane extract supports cognitive function, nerve growth, and mental clarity. It enhances neuroprotection, antioxidant defense, and systemic resilience. Regular use promotes memory, focus, immune support, and overall vitality. Lion's Mane is a key ingredient in nootropic, cognitive, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Lions+Mane+Extract",
//   },
//   {
//     SrNo: 63,
//     Category: "Mushroom Extracts",
//     ProductName: "Shiitake Extract",
//     ScientificName: "Lentinula edodes",
//     CommonName: "Shiitake",
//     StandardizedGrade: "Polysaccharides 20%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Shiitake extract is traditionally used to support immune function, cardiovascular health, and antioxidant defense. Rich in polysaccharides and bioactive compounds, it promotes systemic wellness, metabolic balance, and cellular vitality. Historically, it has been used to improve circulation, reduce oxidative stress, and enhance energy levels. Modern nutraceuticals incorporate Shiitake extract for immune enhancement, cardiovascular support, and overall vitality. It also supports liver function, skin health, and systemic resilience. Shiitake is widely used in dietary supplements, functional foods, and wellness formulations.",
//     Function:
//       "Shiitake extract supports immune function, cardiovascular health, and antioxidant defense. It enhances systemic wellness, energy levels, and cellular protection. Regular use promotes metabolic balance, circulation, and overall vitality. Shiitake is a key ingredient in immune, cardiovascular, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Shiitake+Extract",
//   },
//   {
//     SrNo: 64,
//     Category: "Dietary Fibers & Plant Gums",
//     ProductName: "Psyllium Husk",
//     ScientificName: "Plantago ovata",
//     CommonName: "Psyllium",
//     StandardizedGrade: "Purity 85%, 95%, 99%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Psyllium Husk is traditionally used to support digestive regularity, gut health, and cardiovascular wellness. Rich in soluble fiber, it promotes bowel regularity, cholesterol management, and systemic health. Historically, it has been used to aid in detoxification, metabolic balance, and overall wellness. Modern nutraceuticals incorporate Psyllium Husk for digestive comfort, weight management, and heart health. It also supports blood sugar control, satiety, and overall vitality. Psyllium Husk is widely used in dietary supplements, functional foods, and fiber-rich formulations.",
//     Function:
//       "Psyllium Husk supports digestive regularity, gut health, and cardiovascular wellness. It enhances bowel function, cholesterol management, and systemic vitality. Regular use promotes satiety, blood sugar control, and overall wellness. Psyllium is a key ingredient in fiber-rich, digestive, and heart health formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Psyllium+Husk",
//   },
//   {
//     SrNo: 65,
//     Category: "Dietary Fibers & Plant Gums",
//     ProductName: "Inulin",
//     ScientificName: "Cichorium intybus",
//     CommonName: "Inulin",
//     StandardizedGrade: "Inulin 90%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Inulin is a prebiotic fiber traditionally used to support gut microbiome health, digestive function, and metabolic balance. Rich in soluble fiber, it promotes the growth of beneficial gut bacteria, improves bowel regularity, and enhances nutrient absorption. Historically, it has been used to support systemic wellness, weight management, and cardiovascular health. Modern supplements incorporate Inulin for digestive comfort, immune support, and metabolic regulation. It also enhances satiety, energy metabolism, and overall vitality. Inulin is widely used in dietary supplements, functional foods, and fiber-rich formulations.",
//     Function:
//       "Inulin supports gut microbiome health, digestive function, and metabolic balance. It promotes the growth of beneficial gut bacteria, enhances nutrient absorption, and improves bowel regularity. Regular use supports immune health, weight management, and overall wellness. Inulin is a key ingredient in prebiotic, digestive, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Inulin",
//   },
//   {
//     SrNo: 66,
//     Category: "Dietary Fibers & Plant Gums",
//     ProductName: "Konjac Gum",
//     ScientificName: "Amorphophallus konjac",
//     CommonName: "Konjac",
//     StandardizedGrade: "Glucomannan 90%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Konjac Gum is a soluble fiber traditionally used to support satiety, digestive health, and weight management. Rich in glucomannan, it promotes bowel regularity, cholesterol management, and systemic wellness. Historically, it has been used for detoxification, metabolic balance, and energy regulation. Modern nutraceuticals incorporate Konjac Gum for appetite control, digestive support, and cardiovascular health. It also enhances gut microbiome health, metabolic function, and overall vitality. Konjac is widely used in dietary supplements, functional foods, and fiber-rich formulations.",
//     Function:
//       "Konjac Gum supports digestive health, satiety, and weight management. It promotes bowel regularity, cholesterol management, and metabolic balance. Regular use enhances gut microbiome health, energy levels, and overall wellness. Konjac is a key ingredient in fiber-rich, digestive, and weight management formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Konjac+Gum",
//   },
//   {
//     SrNo: 67,
//     Category: "Dietary Fibers & Plant Gums",
//     ProductName: "Oat Beta-Glucan",
//     ScientificName: "Avena sativa",
//     CommonName: "Oat Beta-Glucan",
//     StandardizedGrade: "Beta-Glucan 20%–70%",
//     AnalyticalMethod: "Not specified",
//     Description:
//       "Oat Beta-Glucan is a soluble fiber traditionally used to support heart health, cholesterol management, and digestive wellness. Rich in beta-glucans, it promotes cardiovascular function, glycemic control, and systemic vitality. Historically, it has been used to improve metabolic balance, digestive health, and overall wellness. Modern nutraceuticals incorporate Oat Beta-Glucan for heart health, immune support, and digestive regularity. It also enhances satiety, energy metabolism, and systemic resilience. Oat Beta-Glucan is widely used in dietary supplements, functional foods, and fiber-rich formulations.",
//     Function:
//       "Oat Beta-Glucan supports heart health, cholesterol management, and digestive wellness. It enhances metabolic balance, glycemic control, and systemic vitality. Regular use promotes satiety, energy levels, and overall wellness. Oat Beta-Glucan is a key ingredient in fiber-rich, cardiovascular, and functional wellness formulations.",
//     ImageURL: "https://via.placeholder.com/150?text=Oat+Beta-Glucan",
//   },
// ];
