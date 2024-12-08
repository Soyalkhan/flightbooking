import React, { useState } from "react";
import "./Flight.css";

const Flight = () => {
  const [flightDetails, setFlightDetails] = useState({
    tripType: "one-way",
    trips: [
      { departure: "", arrival: "", departureDate: "", returnDate: "" },
    ],
    passengers: 1,
  });

  const predefinedCities = [
    "Agartala - Maharaja Bir Bikram Airport (IXA)",
"Agra - Pandit Deen Dayal Upadhyay Airport (AGR)",
"Ahmedabad - Sardar Vallabhbhai Patel International Airport (AMD)",
"Aizawl - Lengpui Airport (AJL)",
"Amritsar - Sri Guru Ram Dass Jee International Airport (ATQ)",
"Bagdogra - Bagdogra Airport (IXB)",
"Bangalore - Kempegowda International Airport (BLR)",
"Bhopal - Raja Bhoj International Airport (BHO)",
"Bhubaneswar - Biju Patnaik International Airport (BBI)",
"Calicut - Calicut International Airport (CCJ)",
"Chandigarh - Chandigarh International Airport (IXC)",
"Chennai - Chennai International Airport (MAA)",
"Coimbatore - Coimbatore International Airport (CJB)",
"Dehradun - Jolly Grant Airport (DED)",
"Delhi - Indira Gandhi International Airport (DEL)",
"Dibrugarh - Dibrugarh Airport (DIB)",
"Dimapur - Dimapur Airport (DMU)",
"Goa - Dabolim Airport (GOI)",
"Guwahati - Lokpriya Gopinath Bordoloi International Airport (GAU)",
"Gwalior - Rajmata Vijaya Raje Scindia Airport (GWL)",
"Hyderabad - Rajiv Gandhi International Airport (HYD)",
"Imphal - Imphal International Airport (IMF)",
"Indore - Devi Ahilya Bai Holkar Airport (IDR)",
"Jaipur - Jaipur International Airport (JAI)",
"Jammu - Jammu Airport (IXJ)",
"Jodhpur - Jodhpur Airport (JDH)",
"Kannur - Kannur International Airport (CNN)",
"Kolkata - Netaji Subhas Chandra Bose International Airport (CCU)",
"Kochi - Cochin International Airport (COK)",
"Kozhikode - Karipur International Airport (CCJ)",
"Lucknow - Chaudhary Charan Singh International Airport (LKO)",
"Madurai - Madurai International Airport (IXM)",
"Mangalore - Mangalore International Airport (IXE)",
"Mumbai - Chhatrapati Shivaji Maharaj International Airport (BOM)",
"Nagpur - Dr. Babasaheb Ambedkar International Airport (NAG)",
"Patna - Jay Prakash Narayan International Airport (PAT)",
"Port Blair - Veer Savarkar International Airport (IXZ)",
"Pune - Pune International Airport (PNQ)",
"Raipur - Swami Vivekananda Airport (RPR)",
"Ranchi - Birsa Munda Airport (IXR)",
"Shillong - Shillong Airport (SHL)",
"Srinagar - Sheikh ul-Alam International Airport (SXR)",
"Surat - Surat Airport (STV)",
"Tiruchirappalli - Tiruchirappalli International Airport (TRZ)",
"Tirupati - Tirupati Airport (TIR)",
"Trivandrum - Trivandrum International Airport (TRV)",
"Udaipur - Maharana Pratap Airport (UDR)",
"Vadodara - Vadodara Airport (BDQ)",
"Varanasi - Lal Bahadur Shastri International Airport (VNS)",
"Visakhapatnam - Visakhapatnam Airport (VTZ)",
"Agartala - Maharaja Bir Bikram Airport (IXA)",
"Agra - Pandit Deen Dayal Upadhyay Airport (AGR)",
"Ahmedabad - Sardar Vallabhbhai Patel International Airport (AMD)",
"Aizawl - Lengpui Airport (AJL)",
"Amritsar - Sri Guru Ram Dass Jee International Airport (ATQ)",
"Bagdogra - Bagdogra Airport (IXB)",
"Bangalore - Kempegowda International Airport (BLR)",
"Bhopal - Raja Bhoj International Airport (BHO)",
"Bhubaneswar - Biju Patnaik International Airport (BBI)",
"Calicut - Calicut International Airport (CCJ)",
"Chandigarh - Chandigarh International Airport (IXC)",
"Chennai - Chennai International Airport (MAA)",
"Coimbatore - Coimbatore International Airport (CJB)",
"Dehradun - Jolly Grant Airport (DED)",
"Delhi - Indira Gandhi International Airport (DEL)",
"Dibrugarh - Dibrugarh Airport (DIB)",
"Dimapur - Dimapur Airport (DMU)",
"Goa - Dabolim Airport (GOI)",
"Guwahati - Lokpriya Gopinath Bordoloi International Airport (GAU)",
"Gwalior - Rajmata Vijaya Raje Scindia Airport (GWL)",
"Hyderabad - Rajiv Gandhi International Airport (HYD)",
"Imphal - Imphal International Airport (IMF)",
"Indore - Devi Ahilya Bai Holkar Airport (IDR)",
"Jaipur - Jaipur International Airport (JAI)",
"Jammu - Jammu Airport (IXJ)",
"Jodhpur - Jodhpur Airport (JDH)",
"Kannur - Kannur International Airport (CNN)",
"Kolkata - Netaji Subhas Chandra Bose International Airport (CCU)",
"Kochi - Cochin International Airport (COK)",
"Kozhikode - Karipur International Airport (CCJ)",
"Lucknow - Chaudhary Charan Singh International Airport (LKO)",
"Madurai - Madurai International Airport (IXM)",
"Mangalore - Mangalore International Airport (IXE)",
"Mumbai - Chhatrapati Shivaji Maharaj International Airport (BOM)",
"Nagpur - Dr. Babasaheb Ambedkar International Airport (NAG)",
"Patna - Jay Prakash Narayan International Airport (PAT)",
"Port Blair - Veer Savarkar International Airport (IXZ)",
"Pune - Pune International Airport (PNQ)",
"Raipur - Swami Vivekananda Airport (RPR)",
"Ranchi - Birsa Munda Airport (IXR)",
"Shillong - Shillong Airport (SHL)",
"Srinagar - Sheikh ul-Alam International Airport (SXR)",
"Surat - Surat Airport (STV)",
"Tiruchirappalli - Tiruchirappalli International Airport (TRZ)",
"Tirupati - Tirupati Airport (TIR)",
"Trivandrum - Trivandrum International Airport (TRV)",
"Udaipur - Maharana Pratap Airport (UDR)",
"Vadodara - Vadodara Airport (BDQ)",
"Varanasi - Lal Bahadur Shastri International Airport (VNS)",
"Visakhapatnam - Visakhapatnam Airport (VTZ)",
"Los Angeles - Los Angeles International Airport (LAX)",
"New York - John F. Kennedy International Airport (JFK)",
"London - Heathrow Airport (LHR)",
"Paris - Charles de Gaulle Airport (CDG)",
"Tokyo - Narita International Airport (NRT)",
"Dubai - Dubai International Airport (DXB)",
"Singapore - Changi Airport (SIN)",
"Amsterdam - Schiphol Airport (AMS)",
"Frankfurt - Frankfurt Airport (FRA)",
"Berlin - Berlin Brandenburg Airport (BER)",
"Rome - Leonardo da Vinci–Fiumicino Airport (FCO)",
"Madrid - Adolfo Suárez Madrid–Barajas Airport (MAD)",
"Barcelona - Barcelona El Prat Airport (BCN)",
"Vienna - Vienna International Airport (VIE)",
"Zurich - Zurich Airport (ZRH)",
"Geneva - Geneva International Airport (GVA)",
"Munich - Munich Airport (MUC)",
"Vienna - Vienna International Airport (VIE)",
"Munich - Munich International Airport (MUC)",
"Seoul - Incheon International Airport (ICN)",
"Beijing - Beijing Capital International Airport (PEK)",
"Shanghai - Shanghai Pudong International Airport (PVG)",
"Bangkok - Suvarnabhumi Airport (BKK)",
"Melbourne - Melbourne Airport (MEL)",
"Sydney - Sydney Kingsford Smith Airport (SYD)",
"Brisbane - Brisbane Airport (BNE)",
"Perth - Perth Airport (PER)",
"Dubai - Dubai International Airport (DXB)",
"Hong Kong - Hong Kong International Airport (HKG)",
"Johannesburg - OR Tambo International Airport (JNB)",
"Cape Town - Cape Town International Airport (CPT)",
"Bangkok - Suvarnabhumi Airport (BKK)",
"Kuala Lumpur - Kuala Lumpur International Airport (KUL)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Manila - Ninoy Aquino International Airport (MNL)",
"Seoul - Incheon International Airport (ICN)",
"Paris - Charles de Gaulle Airport (CDG)",
"Vienna - Vienna International Airport (VIE)",
"Oslo - Oslo Gardermoen Airport (OSL)",
"Stockholm - Stockholm Arlanda Airport (ARN)",
"Copenhagen - Copenhagen Airport (CPH)",
"Reykjavik - Keflavik International Airport (KEF)",
"Mexico City - Benito Juárez International Airport (MEX)",
"São Paulo - São Paulo–Guarulhos International Airport (GRU)",
"Rio de Janeiro - Rio de Janeiro-Galeão International Airport (GIG)",
"Buenos Aires - Ministro Pistarini International Airport (EZE)",
"Santiago - Comodoro Arturo Merino Benítez International Airport (SCL)",
"Lima - Jorge Chávez International Airport (LIM)",
"Caracas - Simón Bolívar International Airport (CCS)",
"San Juan - Luis Muñoz Marín International Airport (SJU)",
"Port of Spain - Piarco International Airport (POS)",
"Toronto - Toronto Pearson International Airport (YYZ)",
"Montreal - Montréal-Pierre Elliott Trudeau International Airport (YUL)",
"Vancouver - Vancouver International Airport (YVR)",
"Los Angeles - Los Angeles International Airport (LAX)",
"Chicago - O'Hare International Airport (ORD)",
"San Francisco - San Francisco International Airport (SFO)",
"Miami - Miami International Airport (MIA)",
"Orlando - Orlando International Airport (MCO)",
"Atlanta - Hartsfield-Jackson Atlanta International Airport (ATL)",
"Washington, D.C. - Dulles International Airport (IAD)",
"Las Vegas - McCarran International Airport (LAS)",
"Seattle - Seattle–Tacoma International Airport (SEA)",
"Boston - Logan International Airport (BOS)",
"Dallas/Fort Worth - Dallas/Fort Worth International Airport (DFW)",
"Denver - Denver International Airport (DEN)",
"Detroit - Detroit Metropolitan Wayne County Airport (DTW)",
"Philadelphia - Philadelphia International Airport (PHL)",
"Minneapolis - Minneapolis-Saint Paul International Airport (MSP)",
"New York - LaGuardia Airport (LGA)",
"Newark - Newark Liberty International Airport (EWR)",
"Houston - George Bush Intercontinental Airport (IAH)",
"Charlotte - Charlotte Douglas International Airport (CLT)",
"Phoenix - Phoenix Sky Harbor International Airport (PHX)",
"San Diego - San Diego International Airport (SAN)",
"Salt Lake City - Salt Lake City International Airport (SLC)",
"Indianapolis - Indianapolis International Airport (IND)",
"Columbus - John Glenn Columbus International Airport (CMH)",
"Cleveland - Cleveland Hopkins International Airport (CLE)",
"St. Louis - St. Louis Lambert International Airport (STL)",
"New Orleans - Louis Armstrong New Orleans International Airport (MSY)",
"Detroit - Detroit Metropolitan Wayne County Airport (DTW)",
"Indianapolis - Indianapolis International Airport (IND)",
"Charlotte - Charlotte Douglas International Airport (CLT)",
"Denver - Denver International Airport (DEN)",
"Singapore - Changi Airport (SIN)",
"Los Angeles - Los Angeles International Airport (LAX)",
"Atlanta - Hartsfield-Jackson Atlanta International Airport (ATL)",
"Chicago - O'Hare International Airport (ORD)",
"San Francisco - San Francisco International Airport (SFO)",
"San Diego - San Diego International Airport (SAN)",
"Washington, D.C. - Washington Dulles International Airport (IAD)",
"Tokyo - Tokyo Narita Airport (NRT)",
"Beijing - Beijing Capital International Airport (PEK)",
"Dubai - Dubai International Airport (DXB)",
"London - Heathrow Airport (LHR)",
"Paris - Charles de Gaulle (CDG)",
"Amsterdam - Schiphol Airport (AMS)",
"Frankfurt - Frankfurt Airport (FRA)",
"Munich - Munich Airport (MUC)",
"Zurich - Zurich Airport (ZRH)",
"Vienna - Vienna International Airport (VIE)",
"Geneva - Geneva International Airport (GVA)",
"Brussels - Brussels Airport (BRU)",
"Oslo - Oslo Gardermoen Airport (OSL)",
"Stockholm - Stockholm Arlanda Airport (ARN)",
"Berlin - Berlin Brandenburg Airport (BER)",
"London - Gatwick Airport (LGW)",
"Manchester - Manchester Airport (MAN)",
"Barcelona - Barcelona El Prat Airport (BCN)",
"Lisbon - Humberto Delgado Airport (LIS)",
"Porto - Francisco Sá Carneiro Airport (OPO)",
"Rome - Leonardo da Vinci–Fiumicino Airport (FCO)",
"Naples - Naples International Airport (NAP)",
"Naples - Capodichino Airport (NAP)",
"Dubai - Al Maktoum International Airport (DWC)",
"Melbourne - Melbourne Tullamarine Airport (MEL)",
"Brisbane - Brisbane Airport (BNE)",
"Sydney - Sydney Kingsford Smith Airport (SYD)",
"Perth - Perth Airport (PER)",
"Gold Coast - Gold Coast Airport (OOL)",
"Christchurch - Christchurch International Airport (CHC)",
"Auckland - Auckland Airport (AKL)",
"Wellington - Wellington Airport (WLG)",
"Adelaide - Adelaide Airport (ADL)",
"Darwin - Darwin International Airport (DRW)",
"Cairns - Cairns International Airport (CNS)",
"Fiji - Nadi International Airport (NAN)",
"Suva - Nausori International Airport (SUV)",
"Vancouver - Vancouver International Airport (YVR)",
"Toronto - Toronto Pearson International Airport (YYZ)",
"Montreal - Montreal Pierre Elliott Trudeau International Airport (YUL)",
"Calgary - Calgary International Airport (YYC)",
"Edmonton - Edmonton International Airport (YEG)",
"Quebec City - Québec City Jean Lesage International Airport (YQB)",
"Winnipeg - Winnipeg James Armstrong Richardson International Airport (YWG)",
"Halifax - Halifax Stanfield International Airport (YHZ)",
"Anchorage - Ted Stevens Anchorage International Airport (ANC)",
"Seattle - Seattle–Tacoma International Airport (SEA)",
"New York - John F. Kennedy International Airport (JFK)",
"Chicago - O'Hare International Airport (ORD)",
"Los Angeles - Los Angeles International Airport (LAX)",
"San Francisco - San Francisco International Airport (SFO)",
"Boston - Logan International Airport (BOS)",
"Washington D.C. - Washington Dulles International Airport (IAD)",
"Miami - Miami International Airport (MIA)",
"Orlando - Orlando International Airport (MCO)",
"Dallas/Fort Worth - Dallas/Fort Worth International Airport (DFW)",
"Las Vegas - McCarran International Airport (LAS)",
"Phoenix - Phoenix Sky Harbor International Airport (PHX)",
"Charlotte - Charlotte Douglas International Airport (CLT)",
"Atlanta - Hartsfield-Jackson Atlanta International Airport (ATL)",
"Mexico City - Benito Juárez International Airport (MEX)",
"Rio de Janeiro - Rio de Janeiro-Galeão International Airport (GIG)",
"São Paulo - São Paulo–Guarulhos International Airport (GRU)",
"Buenos Aires - Ministro Pistarini International Airport (EZE)",
"Dubai - Dubai International Airport (DXB)",
"Singapore - Singapore Changi Airport (SIN)",
"Johannesburg - OR Tambo International Airport (JNB)",
"Cape Town - Cape Town International Airport (CPT)",
"Bangkok - Suvarnabhumi Airport (BKK)",
"Beijing - Beijing Capital International Airport (PEK)",
"Shanghai - Shanghai Pudong International Airport (PVG)",
"Seoul - Incheon International Airport (ICN)",
"Hong Kong - Hong Kong International Airport (HKG)",
"Taipei - Taoyuan International Airport (TPE)",
"Manila - Ninoy Aquino International Airport (MNL)",
"Tokyo - Narita International Airport (NRT)",
"Osaka - Kansai International Airport (KIX)",
"Seoul - Gimpo International Airport (GMP)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Ho Chi Minh City - Tan Son Nhat International Airport (SGN)",
"Ho Chi Minh - Tan Son Nhat Airport (SGN)",
"Bangkok - Don Mueang International Airport (DMK)",
"Chiang Mai - Chiang Mai International Airport (CNX)",
"Kuala Lumpur - Kuala Lumpur International Airport (KUL)",
"Abu Dhabi - Abu Dhabi International Airport (AUH)",
"Doha - Hamad International Airport (DOH)",
"Qatar - Doha Hamad International Airport (DOH)",
"Paris - Orly International Airport (ORY)",
"Amman - Queen Alia International Airport (AMM)",
"Cairo - Cairo International Airport (CAI)",
"Tel Aviv - Ben Gurion Airport (TLV)",
"Istanbul - Istanbul Airport (IST)",
"Saint Petersburg - Pulkovo Airport (LED)",
"Rome - Ciampino Airport (CIA)",
"London - Stansted Airport (STN)",
"London - Luton Airport (LTN)",
"Manchester - Manchester Airport (MAN)",
"Berlin - Berlin Tegel Airport (TXL)",
"Munich - Munich International Airport (MUC)",
"Zurich - Zurich Airport (ZRH)",
"Paris - Charles de Gaulle Airport (CDG)",
"Los Angeles - Los Angeles International Airport (LAX)",
"Singapore - Singapore Changi Airport (SIN)",
"Melbourne - Melbourne International Airport (MEL)",
"Amsterdam - Schiphol Airport (AMS)",
"Paris - Charles de Gaulle Airport (CDG)",
"Helsinki - Helsinki-Vantaa Airport (HEL)",
"Rome - Leonardo da Vinci Airport (FCO)",
"Beijing - Beijing Capital International Airport (PEK)",
"Shanghai - Shanghai Hongqiao International Airport (SHA)",
"Chengdu - Chengdu Shuangliu International Airport (CTU)",
"Ho Chi Minh City - Tan Son Nhat International Airport (SGN)",
"Tokyo - Haneda Airport (HND)",
"Bangkok - Suvarnabhumi International Airport (BKK)",
"Guangzhou - Guangzhou Baiyun International Airport (CAN)",
"Dubai - Dubai International Airport (DXB)",
"Johannesburg - OR Tambo International Airport (JNB)",
"Mumbai - Chhatrapati Shivaji Maharaj International Airport (BOM)",
"Seoul - Incheon International Airport (ICN)",
"Beijing - Beijing Capital International Airport (PEK)",
"London - Heathrow Airport (LHR)",
"Mexico City - Benito Juárez International Airport (MEX)",
"São Paulo - São Paulo–Guarulhos International Airport (GRU)",
"Sydney - Sydney Kingsford Smith Airport (SYD)",
"Bangkok - Don Mueang International Airport (DMK)",
"Dubai - Dubai Al Maktoum International Airport (DWC)",
"Singapore - Singapore Seletar Airport (XSP)",
"Doha - Doha Hamad International Airport (DOH)",
"Sharjah - Sharjah International Airport (SHJ)",
"Manila - Clark International Airport (CRK)",
"Berlin - Berlin Brandenburg Airport (BER)",
"Colombo - Bandaranaike International Airport (CMB)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Helsinki - Helsinki-Vantaa Airport (HEL)",
"Copenhagen - Copenhagen Airport (CPH)",
"Oslo - Oslo Gardermoen Airport (OSL)",
"Stockholm - Stockholm Arlanda Airport (ARN)",
"Munich - Munich International Airport (MUC)",
"Zurich - Zurich Airport (ZRH)",
"Vienna - Vienna International Airport (VIE)",
"Brussels - Brussels Airport (BRU)",
"Amsterdam - Schiphol Airport (AMS)",
"Frankfurt - Frankfurt Airport (FRA)",
"Paris - Charles de Gaulle Airport (CDG)",
"London - Gatwick Airport (LGW)",
"London - Heathrow Airport (LHR)",
"Barcelona - El Prat Airport (BCN)",
"Lisbon - Humberto Delgado Airport (LIS)",
"Rome - Leonardo da Vinci-Fiumicino Airport (FCO)",
"Madrid - Adolfo Suárez Madrid–Barajas Airport (MAD)",
"Munich - Munich Airport (MUC)",
"Dubai - Dubai International Airport (DXB)",
"Jeddah - King Abdulaziz International Airport (JED)",
"Riyadh - King Khalid International Airport (RUH)",
"Abu Dhabi - Abu Dhabi International Airport (AUH)",
"Kuwait City - Kuwait International Airport (KWI)",
"Amman - Queen Alia International Airport (AMM)",
"Cairo - Cairo International Airport (CAI)",
"Tel Aviv - Ben Gurion Airport (TLV)",
"Doha - Hamad International Airport (DOH)",
"Beirut - Beirut–Rafic Hariri International Airport (BEY)",
"Dubai - Dubai International Airport (DXB)",
"Chennai - Chennai International Airport (MAA)",
"Hyderabad - Rajiv Gandhi International Airport (HYD)",
"Bangkok - Suvarnabhumi Airport (BKK)",
"Manila - Ninoy Aquino International Airport (MNL)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Ho Chi Minh City - Tan Son Nhat International Airport (SGN)",
"Seoul - Incheon International Airport (ICN)",
"Tokyo - Narita International Airport (NRT)",
"Osaka - Kansai International Airport (KIX)",
"Hong Kong - Hong Kong International Airport (HKG)",
"Beijing - Beijing Capital International Airport (PEK)",
"Shanghai - Shanghai Pudong International Airport (PVG)",
"Seoul - Gimpo International Airport (GMP)",
"Sydney - Sydney Kingsford Smith Airport (SYD)",
"Melbourne - Melbourne Tullamarine Airport (MEL)",
"Brisbane - Brisbane Airport (BNE)",
"Perth - Perth Airport (PER)",
"Christchurch - Christchurch International Airport (CHC)",
"Auckland - Auckland Airport (AKL)",
"Singapore - Singapore Changi Airport (SIN)",
"Bangkok - Don Mueang International Airport (DMK)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Manila - Ninoy Aquino International Airport (MNL)",
"Dubai - Dubai International Airport (DXB)",
"Los Angeles - Los Angeles International Airport (LAX)",
"San Francisco - San Francisco International Airport (SFO)",
"New York - John F. Kennedy International Airport (JFK)",
"Chicago - O'Hare International Airport (ORD)",
"Washington D.C. - Washington Dulles International Airport (IAD)",
"Miami - Miami International Airport (MIA)",
"Las Vegas - McCarran International Airport (LAS)",
"Orlando - Orlando International Airport (MCO)",
"Dallas/Fort Worth - Dallas/Fort Worth International Airport (DFW)",
"Mexico City - Benito Juárez International Airport (MEX)",
"Santiago - Comodoro Arturo Merino Benítez International Airport (SCL)",
"Buenos Aires - Ministro Pistarini International Airport (EZE)",
"Rio de Janeiro - Galeão International Airport (GIG)",
"São Paulo - São Paulo–Guarulhos International Airport (GRU)",
"Rio de Janeiro - Galeão–Antonio Carlos Jobim International Airport (GIG)",
"São Paulo - São Paulo–Guarulhos International Airport (GRU)",
"Buenos Aires - Ministro Pistarini International Airport (EZE)",
"Monterrey - General Mariano Escobedo International Airport (MTY)",
"Toronto - Toronto Pearson International Airport (YYZ)",
"Vancouver - Vancouver International Airport (YVR)",
"Calgary - Calgary International Airport (YYC)",
"Edmonton - Edmonton International Airport (YEG)",
"Quebec - Jean Lesage International Airport (YQB)",
"Montreal - Montreal Pierre Elliott Trudeau International Airport (YUL)",
"Winnipeg - Winnipeg James Armstrong Richardson International Airport (YWG)",
"Halifax - Halifax Stanfield International Airport (YHZ)",
"Anchorage - Ted Stevens Anchorage International Airport (ANC)",
"Seattle - Seattle–Tacoma International Airport (SEA)",
"Phoenix - Phoenix Sky Harbor International Airport (PHX)",
"San Diego - San Diego International Airport (SAN)",
"Chicago - Chicago Midway International Airport (MDW)",
"Charlotte - Charlotte Douglas International Airport (CLT)",
"Atlanta - Hartsfield-Jackson Atlanta International Airport (ATL)",
"Rio de Janeiro - Rio de Janeiro-Galeão International Airport (GIG)",
"Melbourne - Melbourne International Airport (MEL)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Munich - Munich Airport (MUC)",
"Amsterdam - Schiphol Airport (AMS)",
"Barcelona - Barcelona-El Prat Airport (BCN)",
"Paris - Charles de Gaulle Airport (CDG)",
"London - Heathrow Airport (LHR)",
"Oslo - Oslo Gardermoen Airport (OSL)",
"Stockholm - Arlanda Airport (ARN)",
"New York - LaGuardia Airport (LGA)",
"Paris - Orly Airport (ORY)",
"London - Gatwick Airport (LGW)",
"Tokyo - Haneda Airport (HND)",
"London - Stansted Airport (STN)",
"Seoul - Gimpo International Airport (GMP)",
"Vienna - Vienna International Airport (VIE)",
"Frankfurt - Frankfurt-Hahn Airport (HHN)",
"Berlin - Tegel Airport (TXL)",
"Munich - Munich International Airport (MUC)",
"Brussels - Brussels Charleroi Airport (CRL)",
"Manchester - Manchester Airport (MAN)",
"Dubai - Al Maktoum International Airport (DWC)",
"Rio de Janeiro - Santos Dumont Airport (SDU)",
"Paris - Beauvais-Tille Airport (BVA)",
"Rome - Ciampino Airport (CIA)",
"Berlin - Berlin Brandenburg Airport (BER)",
"Moscow - Sheremetyevo International Airport (SVO)",
"St. Petersburg - Pulkovo Airport (LED)",
"Doha - Doha International Airport (DIA)",
"Zurich - Zurich Airport (ZRH)",
"Tel Aviv - Ben Gurion Airport (TLV)",
"New Delhi - Indira Gandhi International Airport (DEL)",
"Toronto - Toronto Pearson International Airport (YYZ)",
"Mexico City - Mexico City International Airport (MEX)",
"Los Angeles - Los Angeles International Airport (LAX)",
"San Francisco - San Francisco International Airport (SFO)",
"Miami - Miami International Airport (MIA)",
"Washington D.C. - Dulles International Airport (IAD)",
"Vancouver - Vancouver International Airport (YVR)",
"Sydney - Sydney International Airport (SYD)",
"Brisbane - Brisbane International Airport (BNE)",
"Melbourne - Tullamarine Airport (MEL)",
"Adelaide - Adelaide Airport (ADL)",
"Perth - Perth International Airport (PER)",
"Auckland - Auckland International Airport (AKL)",
"Hong Kong - Hong Kong International Airport (HKG)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Bangkok - Suvarnabhumi Airport (BKK)",
"Seoul - Incheon International Airport (ICN)",
"Singapore - Singapore Changi Airport (SIN)",
"Manila - Ninoy Aquino International Airport (MNL)",
"Ho Chi Minh City - Tan Son Nhat International Airport (SGN)",
"Saigon - Tan Son Nhat International Airport (SGN)",
"Dubai - Dubai International Airport (DXB)",
"Abu Dhabi - Abu Dhabi International Airport (AUH)",
"Riyadh - King Khalid International Airport (RUH)",
"Dhaka - Hazrat Shahjalal International Airport (DAC)",
"Chennai - Chennai International Airport (MAA)",
"Kathmandu - Tribhuvan International Airport (KTM)",
"Colombo - Bandaranaike International Airport (CMB)",
"Chengdu - Chengdu Shuangliu International Airport (CTU)",
"Xi'an - Xi'an Xianyang International Airport (XIY)",
"Kunming - Kunming Changshui International Airport (KMG)",
"Seoul - Incheon International Airport (ICN)",
"Beijing - Beijing Capital International Airport (PEK)",
"Shanghai - Shanghai Hongqiao International Airport (SHA)",
"Dubai - Dubai International Airport (DXB)",
"London - London Heathrow (LHR)",
"Tokyo - Narita International Airport (NRT)",
"Sydney - Sydney Kingsford Smith International Airport (SYD)",
"Paris - Charles de Gaulle International Airport (CDG)",
"Hong Kong - Hong Kong International Airport (HKG)",
"Manila - Ninoy Aquino International Airport (MNL)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Bangkok - Don Mueang International Airport (DMK)",
"Dubai - Al Maktoum International Airport (DWC)",
"San Francisco - San Francisco International Airport (SFO)",
"Los Angeles - Los Angeles International Airport (LAX)",
"Shanghai - Shanghai Pudong International Airport (PVG)",
"Dubai - Dubai International Airport (DXB)",
"Mexico City - Benito Juárez International Airport (MEX)",
"Singapore - Singapore Changi Airport (SIN)",
"Hong Kong - Hong Kong International Airport (HKG)",
"Frankfurt - Frankfurt International Airport (FRA)",
"Amsterdam - Schiphol International Airport (AMS)",
"Rome - Fiumicino International Airport (FCO)",
"Vienna - Vienna International Airport (VIE)",
"Dubai - Dubai International Airport (DXB)",
"Dubai - Al Maktoum International Airport (DWC)",
"Seoul - Incheon International Airport (ICN)",
"Zurich - Zurich Airport (ZRH)",
"Paris - Orly Airport (ORY)",
"Rome - Leonardo da Vinci-Fiumicino Airport (FCO)",
"Manchester - Manchester Airport (MAN)",
"Barcelona - El Prat Airport (BCN)",
"New York - John F. Kennedy Airport (JFK)",
"London - Heathrow Airport (LHR)",
"Sydney - Sydney International Airport (SYD)",
"Melbourne - Melbourne Airport (MEL)",
"Munich - Munich International Airport (MUC)",
"Dubai - Dubai International Airport (DXB)",
"Seoul - Incheon International Airport (ICN)",
"Tokyo - Narita International Airport (NRT)",
"Paris - Charles de Gaulle Airport (CDG)",
"Los Angeles - Los Angeles International Airport (LAX)",
"San Francisco - San Francisco International Airport (SFO)",
"Miami - Miami International Airport (MIA)",
"Chicago - O'Hare International Airport (ORD)",
"Boston - Logan International Airport (BOS)",
"Mexico City - Mexico City International Airport (MEX)",
"Rio de Janeiro - Galeão International Airport (GIG)",
"Paris - Orly Airport (ORY)",
"Berlin - Brandenburg Airport (BER)",
"Munich - Munich Airport (MUC)",
"Amsterdam - Schiphol Airport (AMS)",
"Zurich - Zurich Airport (ZRH)",
"Rome - Fiumicino Airport (FCO)",
"London - Gatwick Airport (LGW)",
"New York - John F. Kennedy International Airport (JFK)",
"Los Angeles - Los Angeles International Airport (LAX)",
"San Francisco - San Francisco International Airport (SFO)",
"Toronto - Toronto Pearson International Airport (YYZ)",
"Mexico City - Benito Juárez International Airport (MEX)",
"Sydney - Sydney Kingsford Smith International Airport (SYD)",
"Dubai - Dubai International Airport (DXB)",
"Bangkok - Suvarnabhumi Airport (BKK)",
"Singapore - Singapore Changi Airport (SIN)",
"Hong Kong - Hong Kong International Airport (HKG)",
"Beijing - Beijing Capital International Airport (PEK)",
"Shanghai - Shanghai Pudong International Airport (PVG)",
"Tokyo - Narita International Airport (NRT)",
"Seoul - Incheon International Airport (ICN)",
"Manila - Ninoy Aquino International Airport (MNL)",
"Jakarta - Soekarno-Hatta International Airport (CGK)",
"Delhi - Indira Gandhi International Airport (DEL)",
"Chennai - Chennai International Airport (MAA)",
"Mumbai - Chhatrapati Shivaji Maharaj International Airport (BOM)",
"Dubai - Al Maktoum International Airport (DWC)",
"Riyadh - King Khalid International Airport (RUH)",
"Abu Dhabi - Abu Dhabi International Airport (AUH)",
"Doha - Hamad International Airport (DOH)",
"Muscat - Muscat International Airport (MCT)",
"Jeddah - King Abdulaziz International Airport (JED)",
"Amman - Queen Alia International Airport (AMM)",
"Bangkok - Don Mueang International Airport (DMK)",
"Helsinki - Helsinki-Vantaa Airport (HEL)",
"Vienna - Vienna International Airport (VIE)",
"Oslo - Oslo Gardermoen Airport (OSL)",
"Zurich - Zurich Airport (ZRH)",
"Vienna - Vienna International Airport (VIE)",
"Berlin - Tegel Airport (TXL)",
"New York - LaGuardia Airport (LGA)",
"Los Angeles - Long Beach Airport (LGB)",
"Chicago - O'Hare International Airport (ORD)",
"Chicago - Midway International Airport (MDW)",
"San Francisco - San Francisco International Airport (SFO)",
"Washington D.C. - Dulles International Airport (IAD)",
"Miami - Miami International Airport (MIA)",
"Orlando - Orlando International Airport (MCO)",
"Dallas/Fort Worth - Dallas/Fort Worth International Airport (DFW)",
"Boston - Logan International Airport (BOS)",
"Seattle - Seattle–Tacoma International Airport (SEA)",
"Las Vegas - McCarran International Airport (LAS)",
"Phoenix - Phoenix Sky Harbor International Airport (PHX)",
"Toronto - Toronto Pearson International Airport (YYZ)",
"Vancouver - Vancouver International Airport (YVR)",
"Calgary - Calgary International Airport (YYC)",
"Edmonton - Edmonton International Airport (YEG)",
"Montreal - Montreal Pierre Elliott Trudeau International Airport (YUL)",
"Quebec - Jean Lesage International Airport (YQB)",
"Winnipeg - Winnipeg James Armstrong Richardson International Airport (YWG)",
"Halifax - Halifax Stanfield International Airport (YHZ)",
"Anchorage - Ted Stevens Anchorage International Airport (ANC)",
"Newark - Newark Liberty International Airport (EWR)",
"Rio de Janeiro - Santos Dumont Airport (SDU)",
"Buenos Aires - Ministro Pistarini International Airport (EZE)",
"São Paulo - São Paulo–Guarulhos International Airport (GRU)",
"Santiago - Comodoro Arturo Merino Benítez International Airport (SCL)",
"Bogotá - El Dorado International Airport (BOG)",
"Lima - Jorge Chávez International Airport (LIM)",
"Buenos Aires - Aeroparque Jorge Newbery (AEP)",
"Toronto - Toronto Pearson International Airport (YYZ)",
"Melbourne - Melbourne Tullamarine Airport (MEL)",
"Brisbane - Brisbane Airport (BNE)",
"Perth - Perth Airport (PER)",
"Auckland - Auckland Airport (AKL)",
"Christchurch - Christchurch International Airport (CHC)",
"Brisbane - Brisbane International Airport (BNE)",
"Los Angeles - Los Angeles International Airport (LAX)",
"San Francisco - San Francisco International Airport (SFO)",
"Mexico City - Mexico City International Airport (MEX)",
"Beijing - Beijing Capital International Airport (PEK)",
"Dubai - Dubai International Airport (DXB)",
"Sydney - Sydney Kingsford Smith Airport (SYD)",
"Berlin - Berlin Brandenburg Airport (BER)",
"Tokyo - Haneda Airport (HND)",
"Houston - George Bush Intercontinental Airport (IAH)",
"Atlanta - Hartsfield-Jackson Atlanta International Airport (ATL)",
"New York - John F. Kennedy International Airport (JFK)",
"Chicago - O'Hare International Airport (ORD)",
"Los Angeles - Los Angeles International Airport (LAX)",
"Paris - Charles de Gaulle Airport (CDG)",
"Singapore - Singapore Changi Airport (SIN)",
"Bangkok - Suvarnabhumi Airport (BKK)",
"Zurich - Zurich International Airport (ZRH)",
"Vienna - Vienna International Airport (VIE)",
"Amsterdam - Schiphol Airport (AMS)",
"Oslo - Gardermoen Airport (OSL)",
"Frankfurt - Frankfurt International Airport (FRA)",
"Munich - Munich International Airport (MUC)"




  ];

  const [filteredSuggestions, setFilteredSuggestions] = useState({});

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === "trip") {
      const updatedTrips = flightDetails.trips.map((trip, i) =>
        i === index ? { ...trip, [name]: value } : trip
      );
      setFlightDetails({ ...flightDetails, trips: updatedTrips });

      if (name === "departure" || name === "arrival") {
        const matchingCities = predefinedCities.filter((city) =>
          city.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions({
          ...filteredSuggestions,
          [`${name}-${index}`]: matchingCities,
        });
      }
    } else {
      setFlightDetails({ ...flightDetails, [name]: value });
    }
  };

  const handleSuggestionClick = (city, index, type) => {
    const updatedTrips = flightDetails.trips.map((trip, i) =>
      i === index ? { ...trip, [type]: city } : trip
    );
    setFlightDetails({ ...flightDetails, trips: updatedTrips });
    setFilteredSuggestions({ ...filteredSuggestions, [`${type}-${index}`]: [] });
  };

  const handleSendWhatsApp = () => {
    const tripDetails = flightDetails.trips
      .map(
        (trip, index) =>
          `Trip ${index + 1}:\nDeparture: ${trip.departure || "N/A"}\nArrival: ${
            trip.arrival || "N/A"
          }\nDeparture Date: ${trip.departureDate || "N/A"}\nReturn Date: ${
            trip.returnDate || "N/A"
          }`
      )
      .join("\n\n");

    const message = `Flight Details:\n\nTrip Type: ${
      flightDetails.tripType
    }\nPassengers: ${
      flightDetails.passengers
    }\n\n${tripDetails}`;

    const whatsappUrl = `https://wa.me/918076137439?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flight-booking">
      <h1>Book Your Flight</h1>

      <form>
        <div className="form-group">
          <label htmlFor="tripType">Trip Type:</label>
          <select
            id="tripType"
            name="tripType"
            value={flightDetails.tripType}
            onChange={(e) =>
              setFlightDetails({ ...flightDetails, tripType: e.target.value })
            }
          >
            <option value="one-way">One-Way</option>
            <option value="round-trip">Round-Trip</option>
            <option value="multi-trip">Multi-Trip</option>
          </select>
        </div>

        {flightDetails.trips.map((trip, index) => (
          <div key={index} className="trip-group">
            <h3>Trip {index + 1}</h3>
            <div className="form-group">
              <label htmlFor={`departure-${index}`}>Departure:</label>
              <input
                type="text"
                id={`departure-${index}`}
                name="departure"
                value={trip.departure}
                onChange={(e) => handleChange(e, index, "trip")}
                placeholder="Enter departure city"
              />
              {filteredSuggestions[`departure-${index}`]?.length > 0 && (
                <ul className="suggestions">
                  {filteredSuggestions[`departure-${index}`].map((city, idx) => (
                    <li
                      key={idx}
                      onClick={() =>
                        handleSuggestionClick(city, index, "departure")
                      }
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="form-group">
              <label htmlFor={`arrival-${index}`}>Arrival:</label>
              <input
                type="text"
                id={`arrival-${index}`}
                name="arrival"
                value={trip.arrival}
                onChange={(e) => handleChange(e, index, "trip")}
                placeholder="Enter arrival city"
              />
              {filteredSuggestions[`arrival-${index}`]?.length > 0 && (
                <ul className="suggestions">
                  {filteredSuggestions[`arrival-${index}`].map((city, idx) => (
                    <li
                      key={idx}
                      onClick={() =>
                        handleSuggestionClick(city, index, "arrival")
                      }
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="form-group">
              <label htmlFor={`departureDate-${index}`}>Departure Date:</label>
              <input
                type="text"
                id={`departureDate-${index}`}
                name="departureDate"
                value={trip.departureDate}
                placeholder="DD-MM-YYYY"
                onChange={(e) => handleChange(e, index, "trip")}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>

            {flightDetails.tripType === "round-trip" && index === 0 && (
              <div className="form-group">
                <label htmlFor={`returnDate-${index}`}>Return Date:</label>
                <input
                  type="text"
                  id={`returnDate-${index}`}
                  name="returnDate"
                  value={trip.returnDate}
                  placeholder="DD-MM-YYYY"
                  onChange={(e) => handleChange(e, index, "trip")}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>
            )}
          </div>
        ))}

        {flightDetails.tripType === "multi-trip" && (
          <button
            type="button"
            onClick={() =>
              setFlightDetails({
                ...flightDetails,
                trips: [
                  ...flightDetails.trips,
                  { departure: "", arrival: "", departureDate: "", returnDate: "" },
                ],
              })
            }
          >
            Add Another Trip
          </button>
        )}

        <div className="form-group">
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={flightDetails.passengers}
            onChange={(e) =>
              setFlightDetails({ ...flightDetails, passengers: e.target.value })
            }
            min="1"
          />
        </div>

        <button type="button" onClick={handleSendWhatsApp}>
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Flight;
