package com.GreenUnderground.GreenU;

import com.GreenUnderground.GreenU.Bar.Bars;
import com.GreenUnderground.GreenU.Common.Beverage;
import com.GreenUnderground.GreenU.Common.Category;
import com.GreenUnderground.GreenU.Common.Cuisine;
import com.GreenUnderground.GreenU.Common.Location;
import com.GreenUnderground.GreenU.Gallery.Galleries;
import com.GreenUnderground.GreenU.Cafe.Cafes;
import com.GreenUnderground.GreenU.JuiceBar.JuiceBars;
import com.GreenUnderground.GreenU.Restaurant.Restaurants;
import com.GreenUnderground.GreenU.Therapy.Therapists;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.logging.Logger;

import static com.GreenUnderground.GreenU.Common.Location.Brooklyn;
import static com.GreenUnderground.GreenU.Common.Location.Manhattan;

@SpringBootApplication
public class GreenUApplication {

	private static final Logger logger = Logger.getLogger(GreenUApplication.class.getName());

	public static void main(String[] args) {

		SpringApplication.run(GreenUApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
			Galleries galleries1 = new Galleries(1, "Richard Beavers Gallery", "14 Wooster Street", "www.richardbeaversgallery.com", "Richard Beavers", Location.Manhattan, "www.richardbeaversgallery.com");
			Galleries galleries2 = new Galleries(2, "MoCADA", "80 Hanson Pl", "www.mocada.com", "Laurie Angela Cumbo", Brooklyn, "www.mocoda.com");
			Galleries galleries3 = new Galleries(3, "Bedford Stuyvesant Museum of African Art", "1157 Bedford Ave", "www.bsma.com", "Eric Edwards", Brooklyn, "www.bsma.com");
			Galleries galleries4 = new Galleries(4, "Bishop Gallery", "630 Flushing Ave.", "www.bishopgallery.com", "Erwin John & Stevenson Dunn Jr.", Brooklyn, "www.bishopgallery.com");
			Galleries galleries5 = new Galleries(5, "The Studio Museum", "429 West 127th St.", "www.studiomuseum.com", "Charles Inniss", Location.Manhattan, "www.studiomuseum.com");
			Galleries galleries6 = new Galleries(6, "Nicola Vassell Gallery", "138 10th Avenue", "www.vassellgallery.com", "Nicola Vassell", Brooklyn, "www.vassellgallery.com");
			Galleries galleries7 = new Galleries(7, "Heath Gallery", "24 W 120th St", "www.heathgallery.com", "Thomas Edwin & Saundra Alexis Heath", Location.Manhattan, "www.heathgallery.com");
			Galleries galleries8 = new Galleries(8, "Long Gallery", "2073 Adam Clayton Powell Jr Blvd", "www.longgallery.com", "Lewis Long", Location.Manhattan, "www.longgallery");
			Galleries galleries9 = new Galleries(9, "Hannah Traore Gallery", "150 Orchard Street", "www.hannahtraoregallery.com", "Hannah Traore", Location.Manhattan, "www.hannahtraoregallery");
			Galleries galleries10 = new Galleries(10, "Welancora Gallery", "33 Herkimer Street", "www.welancoragallery.com", "Ivy N. Jones", Brooklyn, "www.welancoragallery.com");
			Galleries galleries11 = new Galleries(11, "Dorsey Art Gallery", "553 Rogers Ave.", "www.dorseyartgallery.com", "Lawrence P. Dorsey", Brooklyn, "www.dorseyartgallery.com");
			Galleries galleries12 = new Galleries(12, "Ground Gallery", "80 Richards St.", "www.groundgallery.com", "Krista Scenna & Jill Benson", Brooklyn, "www.groundgallery.com");
			Galleries galleries13 = new Galleries(13, "Medium Tings", "1134 President Street", "www.mediumtings.com", "Stephanie Baptist", Brooklyn, "www.mediumtings.com");
			Galleries galleries14 = new Galleries(14, "Jenkins Johnson Gallery", "207 Ocean Ave.", "www.jenkinsjohnsongallery.com", "Karen Jenkins Johnson", Brooklyn, "www.jenkinsjohnsongallery.com");
			Galleries galleries15 = new Galleries(15, "Housing Gallery", "191 Henry St.", "www.housinggallery.com", "KJ Freeman & Eileen Skyers", Location.Manhattan, "www.housinggallery.com");
			Galleries galleries16 = new Galleries(16, "Essie Green Gallery", "4213,419 Convent Ave. A", "www.essiegreengallery.com", "Essie Green & Sherman Edmiston", Location.Manhattan, "www.essiegreengallery.com");
			Galleries galleries17 = new Galleries(17, "Black Gotham Experience", "192 Front St.", "www.blackgotham.com", "Kamau Ware", Location.Manhattan, "www.blackgotham.com");
			Galleries galleries18 = new Galleries(18, "Cindy Rucker Gallery", "143 Orchard Street", "www.cindyruckergallery.com", "Cindy Rucker", Location.Manhattan, "www.cindyruckergallery.com");
			Galleries galleries19 = new Galleries(19, "Peg Alston Fine Arts", "407 Central Park W Apt. K", "www.pegalstonfinearts.com", "Peg Alston", Location.Manhattan, "www.pegalstonfinearts.com");
			Galleries galleries20 = new Galleries(20, "Skoto Gallery", "529 W20th St., #5FL", "www.skotogallery.com", "Skoto Aghahowa", Brooklyn, "www.skotogallery.com");
			Galleries galleries21 = new Galleries(21, "Mackey Twins Art Gallery", "457 E. Sidney Ave.", "www.mackeytwinsartgallery.com", "Karen & Sharon Mackey", Brooklyn, "www.mackeytwinsartgallery.com");
			Galleries galleries22 = new Galleries(22, "June Kelly Gallery", "166 Mercer St. #3C", "www.junekellygallery.com", "June Kelly", Brooklyn, "www.junekellygallery.com");
			Galleries galleries23 = new Galleries(23, "The Compound", "185 Van Dyke St.", "www.compound7.series", "Free Richardson", Location.Manhattan, "www.compound7.series");
			Galleries galleries24 = new Galleries(24, "Cierra Britton Gallery", "220b Plymouth St.", "www.cierrabritton.com", "Cierra Britton", Brooklyn, "www.cierrabritton.com");
			Galleries galleries25 = new Galleries(25, "Black Wall Street Gallery", "14 Wooster St.", "www.bwsgallery.com", "Ricco Wright", Location.Manhattan, "");
			Galleries galleries26 = new Galleries(26, "Tanya Weddemire Gallery", "254 36th Street, STE C257", "www.tanyaweddemiregallery.org", "Tanya Weddemire", Location.Manhattan, "www.tanyaweddemiregallery.org");
			Galleries galleries27 = new Galleries(27, "Calabar Gallery", "306 W 38th St.", "www.calabargallery.com", "Atim Annette Oton", Location.Manhattan, "www.calabargallery.com");
			Galleries galleries28 = new Galleries(28, "Bill Hodges Gallery", "521 W 20th St., #10E", "www.billhodgesgallery.com", "Bill Hodges", Location.Manhattan, "www.billhodgesgallery.com");
			Galleries galleries29 = new Galleries(29, "Curtiss Jacobs Gallery", "2075 Adam Clayton Powell Jr Blvd", "www.curtissjacobsgallery.com", "Curtiss Jacobs", Location.Manhattan, "www.curtissjacobsgallery.com");
			Galleries galleries30 = new Galleries(30, "Kente Royal Gallery", " 2373 Adam Clayton Powell Jr Blvd", "www.kenteroyalgallery.com", " Phyllis & Dodji Gbedemah", Location.Manhattan, "www.kenteroyalgallery.com");


			List<Galleries> galleries = List.of(galleries1, galleries2, galleries3, galleries4, galleries5, galleries6,
					galleries7, galleries8, galleries9, galleries10, galleries11, galleries12, galleries13, galleries14,
					galleries15, galleries16, galleries17, galleries18, galleries19, galleries20, galleries21, galleries21,
					galleries22, galleries23, galleries24, galleries25, galleries26, galleries27, galleries28, galleries29, galleries30);

			Cafes cafes1 = new Cafes(1, "Che", "302 Malcolm X Blvd.", Location.Manhattan, "www.che.com", Beverage.Cafe, "www.che.com");
			Cafes cafes2 = new Cafes(2, "I Like It Black", "409 W 125th St.", Location.Manhattan, "www.ilikeitblack", Beverage.Cafe, "www.ilikeitblack");
			Cafes cafes3 = new Cafes(3, "Buuni Cafe", "213 Pinehurst Ave.", Location.Manhattan, "www.buunicafe.com", Beverage.Cafe, "www.buunicafe.com");
			Cafes cafes4 = new Cafes(4, "Hibiscus Brew", "546 Flatbush Ave.", Brooklyn, "www.hibiscusbrew.com", Beverage.Cafe, "www.hibiscusbrew.com");
			Cafes cafes5 = new Cafes(5, "Aunts Et Uncles", "1407 Nostrand Ave.", Brooklyn, "www.auntsetuncles.com", Beverage.Cafe, "www.auntsetuncles.com");
			Cafes cafes6 = new Cafes(6, "Bklyn Blend", "194 Tompkins Ave.", Brooklyn, "www.blklynblend.com", Beverage.Cafe, "www.blklynblend.com");
			Cafes cafes7 = new Cafes(7, "Bushwick Grind", "63 Whipple St.", Brooklyn, "www.bushwickgrind.com", Beverage.Cafe, "www.bushwickgrind.com");
			Cafes cafes8 = new Cafes(8, "Brown Butter Craft Bar & Kitchen", "413 Thompkins Ave.", Brooklyn, "www.brownbutternyc.com", Beverage.Cafe, "www.brownbutternyc.com");
			Cafes cafes9 = new Cafes(9, "St. Michel Cafe", "462 Irving Ave.", Brooklyn, "www.michelcafe.com", Beverage.Cafe, "www.michelcafe.com");
			Cafes cafes10 = new Cafes(10, "Milk & Pull", "778 Seneca Ave.", Brooklyn, "www.milkandpull.com", Beverage.Cafe, "www.milkandpull.com");
			Cafes cafes11 = new Cafes(11, "Lakou Cafe", "195 Utica Ave.", Brooklyn, "www.lakoucafe.com", Beverage.Cafe, "www.lakoucafe.com");
			Cafes cafes12 = new Cafes(12, "Sweet Sundays Cafe", "2916 Beverley Rd.", Brooklyn, "www.sweetsunday.com", Beverage.Cafe, "www.sweetsunday.com");
			Cafes cafes13 = new Cafes(13, "Boogie Down Grind", "88 Hunts Point", Location.Bronx, "www.boogiedowngrind.com", Beverage.Cafe, "www.che.com");
			Cafes cafes14 = new Cafes(14, "Ginjan Cafe", "85 E 125th St.", Location.Manhattan, "www.ilikeitblack", Beverage.Cafe, "www.ilikeitblack");
			Cafes cafes15 = new Cafes(15, "The Oma, Shop", "1707 Amsterdam Ave.", Location.Manhattan, "www.buunicafe.com", Beverage.Cafe, "www.buunicafe.com");
			Cafes cafes16 = new Cafes(16, "LoveLane BK", "674 Nostrand Ave.", Brooklyn, "www.hibiscusbrew.com", Beverage.Cafe, "www.hibiscusbrew.com");
			Cafes cafes17 = new Cafes(17, "Coffee Uplifts People", "329 Gates Ave.", Brooklyn, "www.auntsetuncles.com", Beverage.Cafe, "www.auntsetuncles.com");
			Cafes cafes18 = new Cafes(18, "Chez Alex", "72 Ralph Ave.", Brooklyn, "www.blklynblend.com", Beverage.Cafe, "www.blklynblend.com");
			Cafes cafes19 = new Cafes(19, "Zaca Cafe", "429 Marcus Garvey Blvd.", Brooklyn, "www.bushwickgrind.com", Beverage.Cafe, "www.bushwickgrind.com");
			Cafes cafes20 = new Cafes(20, "Greenhouse Cafe @ Seed Brklyn", "1217 Bedford Ave.", Brooklyn, "www.brownbutternyc.com", Beverage.Cafe, "www.brownbutternyc.com");
			Cafes cafes21 = new Cafes(21, "Brooklyn Perk", "605 Flatbush Ave.", Brooklyn, "www.michelcafe.com", Beverage.Cafe, "www.michelcafe.com");
			Cafes cafes22 = new Cafes(22, "NBHD Brulee", "2620 Frederick Douglass Blvd.", Location.Manhattan, "www.milkandpull.com", Beverage.Cafe, "www.milkandpull.com");
			Cafes cafes23 = new Cafes(23, "Nurish", "637A Vanderbilt Ave.", Brooklyn, "www.lakoucafe.com", Beverage.Cafe, "www.lakoucafe.com");
			Cafes cafes24 = new Cafes(24, "Deja Brew Cafe", "102- 10 Jamaica Ave.", Location.Queens, "www.sweetsunday.com", Beverage.Cafe, "www.sweetsunday.com");
			Cafes cafes25 = new Cafes(25, "Lips Cafe", "1412 Nostrand Ave.", Brooklyn, "www.che.com", Beverage.Cafe, "www.che.com");
			Cafes cafes26 = new Cafes(26, "September", "83 Saratoga Ave.", Brooklyn, "www.ilikeitblack", Beverage.Cafe, "www.ilikeitblack");
			Cafes cafes27 = new Cafes(27, "Cups and Books", "2024 Bedford Ave.", Brooklyn, "www.buunicafe.com", Beverage.Cafe, "www.buunicafe.com");
			Cafes cafes28 = new Cafes(28, "Miss Barbs", "1038 Nostrand Ave.", Brooklyn, "www.hibiscusbrew.com", Beverage.Cafe, "www.hibiscusbrew.com");
			Cafes cafes29 = new Cafes(29, "Brooklyn Tea", "411 Lewis Ave.", Brooklyn, "www.auntsetuncles.com", Beverage.Cafe, "www.auntsetuncles.com");
			Cafes cafes30 = new Cafes(30, "Cafe Lakay", "3323 Avenue I", Brooklyn, "www.blklynblend.com", Beverage.Cafe, "www.blklynblend.com");

			List<Cafes> cafes = List.of(cafes1, cafes2, cafes3, cafes4, cafes5, cafes6, cafes7,
					cafes8, cafes9, cafes10, cafes11, cafes12, cafes13, cafes14, cafes15, cafes16,
					cafes17, cafes18, cafes19, cafes20, cafes21, cafes22, cafes23, cafes24, cafes25,
					cafes26, cafes27, cafes28, cafes29, cafes30);

			JuiceBars juiceBars1 = new JuiceBars(1, "Bkln Blend", "194 Tompkins Ave", Brooklyn, "www.blklynblend.com", Beverage.Juice_Bar, "www.blklynblend.com");
			JuiceBars juiceBars2 = new JuiceBars(2, "The Juice Gallery", "1647 Bedford Ave.", Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars3 = new JuiceBars(3, "Passa Passa", "401 Rogers Ave.", Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars4 = new JuiceBars(4, "Unks Place", "1962 Madison Ave.", Location.Manhattan, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars5 = new JuiceBars(5, "Juice Worx", "90 St. Nicholas", Location.Manhattan, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars6 = new JuiceBars(6, "Cocoa Bean Juice & Salad Bar", "1510 Nostrand Ave.", Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars7 = new JuiceBars(7, "Canarsie Blend Juice Bar", "9202 Avenue M", Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars8 = new JuiceBars(8, "Mad Juicy", "100 W 139th St.", Location.Manhattan, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars9 = new JuiceBars(9, "Juice Joint", "144-14 ROckaway Blvd.", Location.Queens, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars10 = new JuiceBars(10, "Les Deux Nutrition Juice", "662 Blake Ave.", Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars11 = new JuiceBars(11, "Uptown Juice Bar", "2524 Adam Clayton Powell Jr. Blvd.", Location.Manhattan, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars12 = new JuiceBars(12, "Green Garden Health Food", "3543 White Plains Rd.", Location.Bronx, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars13 = new JuiceBars(13, "The Bush Doctor Juice Bar", "307 Tompkins Ave.", Brooklyn,"", Beverage.Juice_Bar, "");
			JuiceBars juiceBars14 = new JuiceBars(14, "Secret Garden Juice Bar & Tea House", "347 Lewis Ave.", Brooklyn,"", Beverage.Juice_Bar, "");
			JuiceBars juiceBars15 = new JuiceBars(15, "The Nourish Bar", "107-05 Guy R Brewer Blvd", Location.Queens, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars16 = new JuiceBars(16, "Mother Earth Juice Bar & Health Food Cafe", "115-42 Sutphin Blvd.", Location.Queens, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars17 = new JuiceBars(17, "Veggies Natural Juice Bar", "85 Franklin Ave.", Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars18 = new JuiceBars(18, "Bar Got Juice", "204-11 Hollis Ave.", Location.Queens, "", Beverage.Juice_Bar, "");

			List<JuiceBars> juiceBars = List.of(juiceBars1, juiceBars2, juiceBars3, juiceBars4, juiceBars5,
					juiceBars6, juiceBars7, juiceBars8, juiceBars9, juiceBars10, juiceBars11, juiceBars12,
					juiceBars13, juiceBars14, juiceBars15, juiceBars16, juiceBars17, juiceBars18);


			Bars bars1 = new Bars(1, "Whisk & WHiskey", "289 Fourth Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars2 = new Bars(2, "Ashford & Simpsons Sugar Bar", "254 W. 72nd St.", Location.Manhattan, "", Beverage.Bar, "");
			Bars bars3 = new Bars(3, "The Rum Bar", "733 Franklin Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars4 = new Bars(4, "Pearl Lees Washtub", "314 Rogers Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars5 = new Bars(5, "The Bush", "33 Troutman St.", Brooklyn, "", Beverage.Bar, "");
			Bars bars6 = new Bars(6, "Bar Room @ Dick & Janes", "300 Malcolm X Blvd.", Location.Manhattan, "", Beverage.Bar, "");
			Bars bars7 = new Bars(7, "Las' Lap", "74 Orchard St.", Location.Manhattan, "", Beverage.Bar, "");
			Bars bars8 = new Bars(8, "Harlem Hops", "2268 Clayton Powell Jr. Blvd.", Location.Manhattan, "", Beverage.Bar, "");
			Bars bars9 = new Bars(9, "Bed Vyne Brew", "370 Tompkins Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars10 = new Bars(10, "The Rogers Garden", "708 Rogers Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars11 = new Bars(11, "Bierwax", "556 Vanderbilt Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars12 = new Bars(12, "The Se7en", "667 Washington Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars13 = new Bars(13, "Filthy Diamond", "679 Knickerbocker Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars14 = new Bars(14, "Jimmy's Corner", "140 W 44th St.", Location.Manhattan, "", Beverage.Bar, "");
			Bars bars15 = new Bars(15, "The Franklin", "448 Franklin Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars16 = new Bars(16, "Deia", "642 Rogers Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars17 = new Bars(17, "Charm Bar & Restaurant", "448 Dean St.", Brooklyn, "", Beverage.Bar, "");
			Bars bars18 = new Bars(18, "Luckys Cocktail Lounge", "334 Marcus Garvey Blvd.", Brooklyn, "", Beverage.Bar, "");
			Bars bars19 = new Bars(19, "The Nighthorse", "66 Greenpoint Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars20 = new Bars(20, "That Bar", "47 5th Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars21 = new Bars(21, "Madelines", "113 Franklin St.", Brooklyn, "", Beverage.Bar, "");
			Bars bars22 = new Bars(22, "Another Country", "10 E. 16th St.", Location.Manhattan, "", Beverage.Bar, "");
			Bars bars23 = new Bars(23, "Essence Bar & Grill", "1662 Atlantic Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars24 = new Bars(24, "IV Purpose", "1489 Fulton St.", Brooklyn, "", Beverage.Bar, "");
			Bars bars25 = new Bars(25, "Therapy Wine Bar 2.0", "260 Malcolm X Blvd, .", Brooklyn, "", Beverage.Bar, "");
			Bars bars26 = new Bars(26, "67 Orange", "83 Saratoga Ave.", Location.Manhattan, "", Beverage.Bar, "");
			Bars bars27 = new Bars(27, "Alibi Lounge", "2376 Adam Clayton Powell Jr Blvd.", Location.Manhattan, "", Beverage.Bar, "");
			Bars bars28 = new Bars(28, "Sweet Brooklyn", "608 Nostrand Ave.", Brooklyn, "", Beverage.Bar, "");
			Bars bars29 = new Bars(29, "Patricks Place", "2835 Frederick Douglass Blvd.", Brooklyn, "", Beverage.Bar, "");
			Bars bars30 = new Bars(30, "& Sons Ham Bar", "447 Rogers Ave.", Brooklyn, "", Beverage.Bar, "");

			List<Bars> bars = List.of(bars1, bars2, bars3, bars4, bars5, bars6, bars7,
					bars8, bars9, bars10, bars11, bars12, bars13, bars14, bars15, bars16,
					bars17, bars18, bars19, bars20, bars21, bars22, bars23, bars24, bars25,
					bars26, bars27, bars28, bars29, bars30);

			Restaurants restaurants1 = new Restaurants(1, "Charles Pan-Fried Chicken Flagship", "340 W 145th St.", "https://www.charlespanfriedchicken.com", Cuisine.American, Category.Fast_Casual, Location.Manhattan, "https://www.charlespanfriedchicken.com", "$15pp");
			Restaurants restaurants2  = new Restaurants(2, "Pig & Butter", "42 Ave. B", "https://www.pigandbutter.com", Cuisine.American, Category.Gastropub, Location.Manhattan,"https://www.pigandbutter.com", "$20pp");
			Restaurants restaurants3  = new Restaurants(3, "Sylvia's", "328 Malcolm X Blvd.", "https://sylviasrestaurant.com", Cuisine.Soul_Food, Category.Casual_Dining, Location.Manhattan, "https://sylviasrestaurant.com", "$30pp");
			Restaurants restaurants4  = new Restaurants(4, "Tatiana", "10 Lincoln Center Plaza", "https://www.tatiananyc.com", Cuisine.Afro_Caribbean, Category.Fine_Dining, Location.Manhattan, "https://www.tatiananyc.com","$150pp");
			Restaurants restaurants5  = new Restaurants(5, "Bunna Cafe", "1084 Flushing Ave.", "https://www.bunnaethiopia.net", Cuisine.Ethiopian, Category.Casual_Dining, Brooklyn, "https://www.bunnaethiopia.net","$20pp");
			Restaurants restaurants6  = new Restaurants(6,"Cheryls Global Soul", "236 Underhill Avenue", "https://www.cherylsglobalsoul.com",Cuisine.Soul_Food, Category.Casual_Dining, Brooklyn,"https://www.cherylsglobalsoul.com", "$20pp");
			Restaurants restaurants7  = new Restaurants(7, "The Islands", "671 Washington Ave.", "https://www.theislands.getsauce.com",Cuisine.Afro_Caribbean, Category.Casual_Dining, Brooklyn, "https://www.theislands.getsauce.com", "$20pp");
			Restaurants restaurants8  = new Restaurants(8, "Kokomo", "65 Kent Avenue", "https://www.kokomonyc.com", Cuisine.Afro_Caribbean, Category.Fine_Dining, Brooklyn, "https://www.kokomonyc.com", "$50pp");
			Restaurants restaurants9  = new Restaurants(9, "MangoSeed", "755 Flatbush Avenue", "https://www.mangoseedbrooklyn.com", Cuisine.Afro_Caribbean, Category.Casual_Dining, Brooklyn, "https://www.mangoseedbrooklyn.com", "$20pp");
			Restaurants restaurants10  = new Restaurants(10, "Peaches HotHouse", "415 Tompkins Ave.", "https://www.bcrestaurantgroup.com/location/peaches-hot-house-bed-stuy", Cuisine.Soul_Food, Category.Casual_Dining, Brooklyn, "https://www.bcrestaurantgroup.com/location/peaches-hot-house-bed-stuy", "$20");
			Restaurants restaurants11  = new Restaurants(11, "Ras Plant Based", "739 Franklin Avenue", "https://www.mangoseedbrooklyn.com", Cuisine.Ethiopian, Category.Fast_Casual, Brooklyn, "https://www.mangoseedbrooklyn.com", "$20pp");
			Restaurants restaurants12  = new Restaurants(12, "Scarrs Pizza", "22 Orchard St.", "https://www.scarrspizza.com", Cuisine.Pizza, Category.Fast_Casual, Location.Manhattan, "https://www.scarrspizza.com","$10pp");
			Restaurants restaurants13  = new Restaurants(13, "Fieldtrip", "109 Malcolm X Blvd.", "https://www.fieldtripnyc.com", Cuisine.American, Category.Fast_Casual, Location.Manhattan, "https://www.fieldtripnyc.com", "$10pp");
			Restaurants restaurants14  = new Restaurants(14, "SoCo BK", "509 Myrtle Ave.", "https://socobklyn.com", Cuisine.Cajun, Category.Casual_Dining, Brooklyn, "https://socobklyn.com", "$50pp");
			Restaurants restaurants15  = new Restaurants(15, "Sisters", "900 Fulton St.", "https://www.sistersbklyn.com", Cuisine.New_American, Category.Casual_Dining, Brooklyn, "https://www.sistersbklyn.com", "$30pp");
			Restaurants restaurants16  = new Restaurants(16, "Ghenet", "348 Douglass St.", "https://www.ghenet.com", Cuisine.Ethiopian, Category.Casual_Dining, Brooklyn, "https://www.ghenet.com", "$30pp");
			Restaurants restaurants17  = new Restaurants(17, "Negril BK", "256 5th Ave.", "https://negrilbk.com", Cuisine.Afro_Caribbean, Category.Casual_Dining, Brooklyn, "https://negrilbk.com", "$30pp");
			Restaurants restaurants18  = new Restaurants(18, "Vinateria", "2211 Frederick Douglas Blvd.", "https://www.vinaterianyc.com", Cuisine.Italian, Category.Casual_Dining, Location.Manhattan, "https://www.vinaterianyc.com", "$30pp");
			Restaurants restaurants19  = new Restaurants(19, "Seasoned", "128 2nd Ave.", "https://www.seasonedvegan.com", Cuisine.Vegetarian, Category.Fast_Casual, Location.Manhattan, "https://www.seasonedvegan.com","$10pp");
			Restaurants restaurants20  = new Restaurants(20, "Queen of Sheba", "650 Tenth Ave.", "https://www.shebanyc.com", Cuisine.Ethiopian, Category.Casual_Dining, Location.Manhattan,"https://www.shebanyc.com", "$20pp");
			Restaurants restaurants21  = new Restaurants(21, "Brooklyn Chop House", "150 Nassau St.", "https://www.brooklynchophouse.com", Cuisine.Asian, Category.Fine_Dining, Brooklyn, "https://www.brooklynchophouse.com", "$100pp");
			Restaurants restaurants22  = new Restaurants(22, "Reverence", "2592 Frederick Douglas Blvd.", "https://reverence.nyc", Cuisine.New_American, Category.Fine_Dining, Location.Manhattan,"https://reverence.nyc", "$100pp");
			Restaurants restaurants23  = new Restaurants(23, "Brooklyn Beso", "370 Lewis Ave.", "https://brooklynbeso.com", Cuisine.Latin, Category.Casual_Dining, Brooklyn, "https://brooklynbeso.com", "$30pp");
			Restaurants restaurants24  = new Restaurants(24, "Teranga", "1280 5th Ave", "https://itsteranga.com", Cuisine.West_African, Category.Casual_Dining, Location.Manhattan, "https://itsteranga.com" , "$30pp");
			Restaurants restaurants25  = new Restaurants(25, "Ponty Bistro", "144 West 139th Street", "https://pontybistroharlem.com", Cuisine.West_African_French, Category.Casual_Dining, Location.Manhattan, "https://pontybistroharlem.com", "$30pp");
			Restaurants restaurants26  = new Restaurants(26, "Yop City", "2324 Arthur Ave.", "https://yopcityrestaurantny.com", Cuisine.West_African, Category.Casual_Dining, Location.Bronx,"https://yopcityrestaurantny.com", "$20pp");
			Restaurants restaurants27  = new Restaurants(27, "Cafe Rue Dix", "1451 Bedford Ave.", "https://www.ruedixbrooklyn.com", Cuisine.Senegalese, Category.Casual_Dining, Brooklyn,"https://www.ruedixbrooklyn.com", "$30pp");
			Restaurants restaurants28  = new Restaurants(28, "Ramen By Ra", "348 Bowery", "https://www.ramenbyra.com", Cuisine.Asian, Category.Casual_Dining, Location.Manhattan, "https://www.ramenbyra.com", "$20pp");
			Restaurants restaurants29  = new Restaurants(29, "Metropolis", "251 Fulton St.", "https://www.metropolisbymarcus.com", Cuisine.New_American, Category.Fine_Dining, Location.Manhattan,"https://www.metropolisbymarcus.com", "$100pp");
			Restaurants restaurants30  = new Restaurants(30, "Radio Kwara", "291 Greene Ave.", "https://www.radiokwarabk.com", Cuisine.West_African,Category.Fine_Dining, Location.Brooklyn, "https://www.radiokwarabk.com", "$100pp");
			Restaurants restaurants31  = new Restaurants(31, "Sushi Oku", "22 Orchard St.", "https://www.sushioku.com", Cuisine.Asian, Category.Fine_Dining, Location.Manhattan,"https://www.sushioku.com", "$100pp");
			Restaurants restaurants32  = new Restaurants(32, "SAimer", "338 W. 46th", "https://www.saimernyc.com", Cuisine.French_Caribbean, Category.Fine_Dining, Location.Manhattan, "https://www.saimernyc.com","$50pp");
			Restaurants restaurants33  = new Restaurants(33, "File Gumbo Bar", "275 Church St.", "https://filenyc.com", Cuisine.Cajun, Category.Fine_Dining, Location.Manhattan, "https://filenyc.com", "$100pp");
			Restaurants restaurants34  = new Restaurants(34, "BLVD Bistro", "2149 Frederick Douglas Blvd.", "https://www.boulevardbistrony.com", Cuisine.Soul_Food, Category.Casual_Dining, Location.Manhattan, "https://www.boulevardbistrony.com","$50pp");
			Restaurants restaurants35  = new Restaurants(35, "Cornbread Brooklyn", "409 Eastern Parkway", "https://cornbreadsoul.com", Cuisine.Soul_Food, Category.Fast_Casual, Location.Brooklyn, "https://cornbreadsoul.com", "$20pp");
			Restaurants restaurants36  = new Restaurants(36, "dùndú", "140 E. 41st St.", "https://eatdundu.com", Cuisine.West_African,  Category.Fast_Casual, Location.Manhattan, "https://eatdundu.com", "$10pp");
			Restaurants restaurants37  = new Restaurants(37, "Fat Fowl", "445 Albee Square W", "https://www.thefatfowl.com", Cuisine.Afro_Caribbean, Category.Fast_Casual, Location.Brooklyn, "https://www.thefatfowl.com", "$10pp");
			Restaurants restaurants38  = new Restaurants(38, "Fyahbun Creative", "324 E. 48th St.", "https://www.fyahbuncreative.com", Cuisine.Afro_Caribbean, Category.Fast_Casual, Location.Manhattan, "https://www.fyahbuncreative.com", "$10pp");
			Restaurants restaurants39  = new Restaurants(39, "Cadence", "111 E 7th St.", "https://www.cadencenewyork.com", Cuisine.Vegetarian_Soul_Food, Category.Fine_Dining, Location.Manhattan, "https://www.cadencenewyork.com","$50pp");
			Restaurants restaurants40  = new Restaurants(40, "The Good Good", "1694 Park Ave.", "https://www.thegoodgoodnyc.com", Cuisine.Afro_Caribbean, Category.Fine_Dining, Location.Manhattan, "https://www.thegoodgoodnyc.com","$50pp");
			Restaurants restaurants41  = new Restaurants(41, "The Crabby Shack", "613 Franklin Ave.", "https://thecrabbyshack.com", Cuisine.Seafood, Category.Fast_Casual, Location.Brooklyn, "https://thecrabbyshack.com", "$25pp");
			Restaurants restaurants42  = new Restaurants(42, "Stellas", "321 9th St.", "https://stellascaribbean.com", Cuisine.Afro_Caribbean, Category.Casual_Dining, Location.Brooklyn, "https://stellascaribbean.com", "$30pp");
			Restaurants restaurants43  = new Restaurants(43, "Black Forest", "733 Fulton Street", "https://www.blackforestbrooklyn.com", Cuisine.German, Category.Casual_Dining, Location.Brooklyn, "https://www.blackforestbrooklyn.com","$30pp");
			Restaurants restaurants44  = new Restaurants(44, "Sweet Catch", "1222 Nostrand Avenue", "https://www.sweetcatchbk.com", Cuisine.Seafood, Category.Casual_Dining, Location.Brooklyn, "https://www.sweetcatchbk.com", "$50pp");
			Restaurants restaurants45  = new Restaurants(45, "Jasmines Caribbean Cuisine", "371 W 46th St.", "https://www.jasminecaribbeancuisine.com", Cuisine.Afro_Caribbean, Category.Casual_Dining, Location.Manhattan,"https://www.jasminecaribbeancuisine.com", "$50pp");
			Restaurants restaurants46  = new Restaurants(46, "Le Chai", "1904 Utica Ave", "https://www.lechainyc.com", Cuisine.Asian, Category.Casual_Dining, Location.Brooklyn, "https://www.lechainyc.com", "$100pp");
			Restaurants restaurants47  = new Restaurants(47, "Aliya", "500 Metropolitan Ave.", "https://www.ihg.com/hotelindigo/hotels/us/en/brooklyn/nycmp/hoteldetail/dining/aliya", Cuisine.Caribbean_Asian, Category.Fine_Dining, Location.Manhattan, "https://www.ihg.com/hotelindigo/hotels/us/en/brooklyn/nycmp/hoteldetail/dining/aliya","$50pp");
			Restaurants restaurants48  = new Restaurants(48, "Taste of Heaven", "251 Jackson St.", "http://www.tasteofheavenbk.com", Cuisine.Seafood, Category.Casual_Dining, Location.Brooklyn , "http://www.tasteofheavenbk.com", "$10pp");
			Restaurants restaurants49  = new Restaurants(49, "Clover Hill", "20 Columbia Pl.", "https://www.cloverhillbk.com", Cuisine.American, Category.Fine_Dining, Location.Brooklyn, "https://www.cloverhillbk.com","$100pp");
			Restaurants restaurants50  = new Restaurants(50, "Somethin On Myrtle", "503 Myrtle Ave", "https://www.somethinonmyrtle.com", Cuisine.Caribbean_Asian, Category.Casual_Dining, Location.Brooklyn, "https://www.somethinonmyrtle.com", "$50pp");
			Restaurants restaurants51  = new Restaurants(51, "The Row Harlem", "2374 Adam Clayton Powell Jr. Blvd.", "https://therowharlem.com", Cuisine.American, Category.Casual_Dining, Location.Manhattan, "https://therowharlem.com", "$50pp");
			Restaurants restaurants52  = new Restaurants(52, "The Grotto Bk", "321 Nostrand Ave.", "https://thegrottobk.com", Cuisine.Afro_Caribbean, Category.Casual_Dining, Brooklyn, "https://thegrottobk.com", "$20pp");

			List<Restaurants> restaurants = List.of(restaurants1, restaurants2, restaurants3, restaurants4,
					restaurants5, restaurants6, restaurants7, restaurants8, restaurants9, restaurants10, restaurants11,
					restaurants12, restaurants13, restaurants14, restaurants15, restaurants16, restaurants17, restaurants18,
					restaurants19, restaurants20, restaurants21, restaurants22, restaurants23, restaurants24,restaurants25,
					restaurants26, restaurants27, restaurants28, restaurants29, restaurants30, restaurants31, restaurants32,
					restaurants33, restaurants34, restaurants35, restaurants36, restaurants37, restaurants38, restaurants39,
					restaurants40, restaurants41, restaurants42, restaurants43, restaurants44,restaurants45, restaurants46,
					restaurants47, restaurants48, restaurants49, restaurants50, restaurants51, restaurants52);

			Therapists therapists1 = new Therapists(1, "Kezzia Quintyne-Hilaire", "LMHC, CASAC, Counselor", "", "Your feelings are valid! As a Licensed Mental Health Counselor and a Black therapist in NYC, I understand the value of receiving quality therapy services. My practice is dedicated to helping women of color keep their crowns on straight. I specialize in trauma, women's issues, and anxiety. My primary therapeutic focus is Eye Movement Desensitization and Reprocessing (EMDR), which uses bilateral stimulation to help replace traumatic memories. Healing occurs through various approaches, so I also use multiple therapies to help my clients reduce depression, anxiety, work stress, and emotional distress.", Location.Brooklyn,"https://www.kqhcounseling.com/contact-black-female-therapist-nyc");
			Therapists therapists2 = new Therapists(2, "Keanu M. Jackson", "Clinical Social Work/Therapist, LCSW", "", "In our sessions, we will delve into the complex tapestry of your relationships, exploring the dynamics of intimacy and connection with honesty and vulnerability. From navigating communication challenges to deepening emotional intimacy, I provide practical tools and insightful guidance for you to foster healthier, more fulfilling connections with others and yourself. What excites me most about this work is being able to share space with those within my own communities. As a kinky, queer, Black therapist I recognize that what we need is the opportunity to expand our horizons in an effort to dive deeper into the richness of who we are.", Location.Brooklyn, "https://www.keanumjackson.com");
			Therapists therapists3 = new Therapists(3, "Queen Ravenden", "Art Therapist, R-DMT, LCAT","",	"Greetings and peace to you, divine being. I am a black, caribbean american, creative arts therapist providing safe, affirming, uplifting, and holistic healing. My therapeutic style uses a strength-based approach while incorporating creative art therapy techniques and catering to the balance & overall wellbeing of the mind, body, & soul. I work with individuals to overcome low self-esteem, self-doubt, anxiety, past traumas, and depression using creative arts therapy.", Location.Brooklyn, "https://www.mindbodysoulvirtualwellnesscenter.com");
			Therapists therapists4 = new Therapists(4, "Chelsea Thornton", "Licensed Master Social Work, LMSW", "",	"I’m passionate in analyzing interpersonal connections through a multicultural lens. I frequently utilize CBT, EFT (Emotionally Focused Therapy), ARA (the Ackerman Relational Approach), and mindfulness techniques as we learn and embrace the many overlapping identities that exist within you. I provide services to children, teens, adults, couples, and families.", Location.Brooklyn, "https://www.zocdoc.com/professional/chelsea-thornton-lmsw-480442");
			Therapists therapists5 = new Therapists(5, "The Healing Collective", "Clinical Social Work/Therapist, LCSW","", "The Healing Collective is a New York-based therapeutic group practice that centers the healing of Black folks, Indigenous folks, and non-Black folks of color. We offer telehealth services to individuals (youth and adults), couples, and families throughout New York and New Jersey. We also offer coaching services throughout the United States. The Healing Collective believes that every being is worthy of healing and that our healing comes from within. We’d be honored if you chose us for your healing journey.", Location.Brooklyn, "https://www.thehealingcollectivepractice.com");
			Therapists therapists6 = new Therapists(6, "Shani Graves", "Counselor, LMHC", "", "Maybe it's been two months or two years, but it has not been easy. Whether it's your personal life, work life, familial, platonic, or romantic relationships. You may have begun to feel overwhelmed,annoyed, stressed, lonely and even depressed. You compare yourself to others and wonder why your life is not a reflection of the work you've put into it or how you imagined it would be. If any of these feelings have taken root in your life, contact me and my team today. Our role at SG Wellness is to create a space for Black, Latinx and People of Color to begin exploring patterns and work towards change. Together we can work to get you out of the haze, reduce pressure and set boundaries for yourself and others.",  Location.Brooklyn, "https://sgcounselingnyc.com");
			Therapists therapists7 = new Therapists(7, "Tanner Kaleb Williams", "Licensed Master Social Worker, LMSW", "", "Hello there :) I'm Tanner (he/him) a Black, queer, art and creativity lover based in Brooklyn, NY on occupied Lenape land. If you're searching for a therapist who truly listens and collaborates rather than just gives advice and diagnoses, I would be honored to connect with you. I focus on embracing radical acceptance, fostering community based care, and moving beyond labeling our experiences. If you're in need of a safe space to be your authentic self, we might be a perfect match. Please reach out! I am eager to hear about what’s bringing you to therapy.", Location.Manhattan, "https://www.inclusivetherapists.com/new-york/brooklyn/tanner-williams");
			Therapists therapists8 = new Therapists(8, "Cloricea Brooks", "Counselor, MA, LMHC, CASAC-T", "", "Everyday we tell ourselves stories through our thoughts. These stories stem from our lived experiences, which are inseparable from our cultural identities. Life challenges like job stress, relationship issues, trauma, and grief can lead to stories that highlight fear, anger, mistrust, and sadness, resulting in detachment and difficulty feeling joy. I believe that restoring genuine connections with yourself and others is a powerful antidote. Together we will explore cognitive and behavioral interventions to change what you can, while intentionally accepting the unchangeable in a compassionate space.", Location.Manhattan, "https://headway.co/providers/cloricea-brooks");
			Therapists therapists9 = new Therapists(9, "Dr. Gary Dillon", "Psychologist, PhD", "", "Frustrated, stuck, or unfulfilled in an area of your life? You're not alone. Amid a global pandemic, along with the current social and political climate, knowing how to begin healing can be a challenge. Life is complicated and it can be difficult to reach out to gain the support and encouragement that you need to succeed. But don’t worry, I’ll be your ally on this journey - supporting and helping you along the way. As a Black male therapist in NYC, I specialize in working with individuals & couples, who at times feel powerless and are often marginalized - including immigrants, people of color, and members of the LGBTQIA+ community.", Location.Manhattan, "https://www.allypsychotherapy.com");
			Therapists therapists10 = new Therapists(10, "Racine Renee Henry", "Marriage & Family Therapist, PhD, LMFT", "", "The word Sankofa means 'one must go back in order to move forward'. The idea is that in order to move forward into our highest potential, we must use the best of what was in our past. As a relational therapist who primarily works from a Solution-Focused approach, the word Sankofa reflects my belief that learning from our experiences in the past can contribute to healing in the present and future. I believe we are all capable of change through an effective solution. I have experience bringing about the changes that will lead to a healthier and happier life. I specialize in treating couples from marginalized and minority groups. I have done extensive research and training on issues commonly experienced by women of all backgrounds, within the Black community and within Black romantic relationships.", Location.Staten_Island, "https://www.sankofatherapynyc.com");
			Therapists therapists11 = new Therapists(11, "Amira R Martin", "Clinical Social Work/Therapist, LCSW-R", "", "I am here to provide you with warm and compassionate support as you navigate life's challenges. Your journey is unique, and I want you to feel genuinely heard and understood. If you're facing issues like Depression, Anxiety, difficult relationships and work-related struggles, I am here to help you navigate and recover from these challenges. My commitment is to create a safe and supportive space for your healing. Together, we will address your struggles and challenges while fostering your personal growth and resilience. You can achieve emotional well-being, navigate life transitions, and ultimately lead a more fulfilling life.", Location.Brooklyn, "https://www.amiraforher.com");
			Therapists therapists12 = new Therapists(12, "Vanessa A. Williams", "Counselor, LMHC", "", "'There is no greater agony than bearing the untold story inside you.' - Maya Angelou. Each person’s story shapes them and a burden to carry alone that is relieved when met with empathy. I consider it an honor to be present with clients as they share their untold story, gain greater self-knowledge, and manifest the story that is yet to come. I come from a place of curiosity and non-judgement around each individual’s lived experience. I hope to create a warm, accepting space where you can be your authentic self, feel safe to express your uncensored thoughts and share both laughter and tears.", Location.Brooklyn, "https://rootsandbranchestherapy.nyc/vanessa-williams/");
			Therapists therapists13 = new Therapists(13, "Dwayne James", "Clinical Social Work/Therapist, MSW, LCSW", "" ,"I say seeking therapy is nothing close to a sign of weakness but the biggest sign of strength you can possibly have. My name is Dwayne James, and I am a Black male clinician. With over five years of clinical therapeutic experience, my passion for social-emotional support continues to shine through with every client interaction. My overall therapeutic goal is to ensure folks get the essential tools to add to their tool kit in times of need while also providing the utmost support for their social and emotional needs. My work is rooted in cultural sensitivity and recognizes that clients are experts in their own experiences.", Location.Brooklyn, "https://headway.co/providers/dwayne-james?utm_source=pem&utm_medium=direct_link&utm_campaign=94657");
			Therapists therapists14 = new Therapists(14, "Uzoma Chibundu", "Clinical Social Work/Therapist, LMSW", "","My therapeutic approach is collaborative, warm, authentic and holistic. I believe the client is the expert of their experiences and my purpose is to assist them in their journey toward healing. I help clients through an array of talk therapy, story telling and treatment-centered homework. I operate from a relational, intersectional, and anti-oppressive lens. Everyone has their own therapeutic journey, and who we bring on this journey is up to us. One's journey towards healing can be a culmination of tough conversations, laughter, and tears. My hope is that we all find people to accompany us on our therapeutic journey. Let's schedule a free consultation to see we would be a good fit.", Location.Brooklyn, "https://www.psychologytoday.com/us/therapists/uzoma-chibundu-brooklyn-ny/1051407");
			Therapists therapists15 = new Therapists(15, "Nafisa Clay", "Counselor, LMHC", " ","My style includes respect, empowerment and solution exploration. I have been trained in a range of modalities inclusive of motivational interviewing, cognitive behavioral therapy, solution-focused therapy and strength-based therapy. Your decision to explore therapy to help you navigate change, difficult feelings and/or behaviors can be the first step in embracing more overall wellness and life satisfaction. If you are ready to take the step, I am here to support you in your journey. I look forward to working alongside you!",Location.Manhattan, "https://nafisah-clay.clientsecure.me");
			Therapists therapists16 = new Therapists(16, "Therapy For Black Men", "Counselor, LMHC" , "", "You are worthy of care, of healing, of peace. Life can feel overwhelming sometimes whether it's the pressures you face every day, the weight of expectations, or the silent struggles that no one else sees. You don’t have to carry it all on your own. Therapy for Black Men offers a safe space to connect with therapists and coaches who look like you, understand your experiences, and want to help you heal.", Location.Manhattan, "https://therapyforblackmen.org");
			Therapists therapists17 = new Therapists(17, "Zakiyyah Abdul-Mateen", "Clinical Social Work/Therapist, LCSW", "","I am an EMDR-trained, child/adolescent & young adult psychotherapist who has created a safe space providing services to strengthen the most vulnerable populations. I use meditative practices to reduce anxiety associated with traumatic memory. Things such as childhood traumas, environmental factors, depression, anxiety and adjustments can all effect the way one interprets life. For Caregivers: With treatment catered to your child's specific needs, I will begin the process of helping them heal through therapeutic play, relaxation techniques, listening skills, while also engaging the family to formulate best treatment for the child.", Location.Manhattan, "https://www.zakiyyah-am.com");
			Therapists therapists18 = new Therapists(18, "Camille Lester", "Counselor, LMHC, LCPC, MS, NCC", "", "Are you ready to start addressing the patterns you keep saying you will? Deepen emotional intimacy? Explore feeling safe in vulnerability? Stop feeling stuck when attempting to understand or communicate your needs? Begin breaking down what it means to “break generational curses” and actually start breaking them? Rest assured, you are in the right place. I'm happy you're here!", Location.Manhattan, "https://www.therapywithc.com");
			Therapists therapists19 = new Therapists(19, "Andra Brown", "Counselor, MA, LMHC", "", "Being a Black person in a professional leadership position can be extremely tough, to say the least. You more than likely received that position due to your uncanny ability of taking care of everybody & everything, and getting sh!t done! Not only are you good at this on the job, but you are typically good at doing this in your personal life. You’re the “responsible” one - the one that everyone in your circles can rely on. While there are benefits from being seen in this manner, you are constantly working, & overworking. Not to mention, working through the microaggressions, and harmful behaviors from other coworkers at work.", Location.Manhattan, "https://www.andrabrown.com/appointments");
			Therapists therapists20 = new Therapists(20, "Kyle Brown", "Clinical Social Work/Therapist, LCSW, SEP", "", "You deserve to be in community with people who support and uplift you. Far too often, people are judged by many mental health professionals. As a black queer non-binary therapist, my ultimate goal is to support you. I have extensive experience providing psychotherapy to LGBTQIA+ and BIPOC communities, and allies. I can be particularly helpful in helping you develop more self-acceptance, more insight, and teach you different tools to support your mental health and well-being. Let’s collaborate to find what works best for you.", Location.Manhattan, "https://www.itsavibepsychotherapy.com");
			Therapists therapists21 = new Therapists(21, "Dr. Keoshia Worthy", "Psychologist, PhD, MS", "", "Hello, my name is Dr. Keoshia Worthy and thank you for visiting my profile. The question that I am frequently asked is, “How do I know if I need therapy?” I like to approach that question by considering the common misconceptions and benefits of therapy. Therapy is not just for people with mental illnesses, someone grieving a loss, or someone who experienced a trauma. Therapy is for anyone, even the well-adjusted person. I believe the benefits from therapy are vast and vary from person to person. For example, therapy can reduce stress, improve relationships, and help with decision-making.", Location.Manhattan, "http://www.worthytherapy.com");
			Therapists therapists22 = new Therapists(22, "Michael Snipe Jr.", "Pre-Licensed Professional, LP-MFT", "", "As a person of intersecting marginalized communities, I understand the need for a safe space to process life’s ups and downs. That' s why creating a therapeutic alliance with you to feel seen, heard and understood is of utmost importance to me. I'm here to accompany you on this journey to help you better deal with any stressors or trauma. We'll work together to overcome the seen and unseen obstacles in your life and find a more balanced way of living.", Location.Manhattan, "https://www.equitytherapy.com");
			Therapists therapists23 = new Therapists(23, "Zonya Mitchell Neuropsychologist", "Psychologist", "", "When conducting neuropsychological testing, my mission is to provide a warm and caring environment and to see the complete person so that you leave feeling like you have been heard. As a trained neuropsychologist I understand neurological and neurodevelopmental disorders, as well as attention and learning difficulties and how they affect abilities. Psychological/neuropsychological evaluations include assessment of all brain functioning, academic performance, language, and social/emotional development. My aim is to help determine how you or your child are functioning now and how to best help you move forward.", Location.Manhattan, "https://nycneuropsycheval.com");
			Therapists therapists24 = new Therapists(24, "Paul Geovani Bonilla Jaime", "", "Marriage & Family Therapist, LMFT, MS",	"Finding it challenging to connect with yourself or your loved ones? Perhaps daily stressors are taking a toll on your well-being? As a Licensed Marriage and Family Therapist, I am here to walk with you on a path of exploration and growth. Whether you're an individual seeking personal development or a couple navigating the complexities of your relationship, I am dedicated to helping you achieve your goals.In working with couples, I focus on identifying strengths and improving communication while addressing concerns such as infidelity, conflict resolution and cultural differences.For individuals, a safe space for exploring concerns.", Location.Manhattan, "https://headway.co/providers/paul-bonilla-jaime?utm_source=pem&utm_medium=direct_link&utm_campaign=93102");
			Therapists therapists25 = new Therapists(25, "Dru Collins-Minch", "LPC-A, LAC, MHC-LP, CTP, RYT-200", "", "I’m a therapist who uses an approach that blends mindfulness, personal values, and an understanding of how our life experiences shape us. I am all about creating space for your feelings—good and bad—while focusing on what truly matters to you. My aim is to help you manage symptoms and guide you in building healthier relationships with yourself, your thoughts, and those around you. I’d like to welcome you to a space where your thoughts, emotions, and relationships are taken seriously, with compassion and care. Together, we will explore ways to live a life aligned with your values, even in the face of challenges.", Location.Manhattan, "https://mcmcollab.com/therapists/dru-collins-minch");
			Therapists therapists26 = new Therapists(26, "Lindsey Washington", "Licensed Master Social Worker, LMSW, LSW", "", "Are you having trouble in your relationship? Are you looking to connect more deeply with your partner or find yourself in the same fights over and over? I specialize in working with couples and individuals who are struggling to with communication, dealing with unhealthy patterns, and who are tired of repeating the same cycles. Whether you're single, in a relationship or married, working, in school or figuring out your next steps, I can help!", Location.Manhattan, "https://sohumtherapy.com/therapists/lindsey-washington");
			Therapists therapists27 = new Therapists(27, "Khadijah Cyril", "Psychologist, PhD", "", "Accepting a New Client. I am so proud of the courage that it took you to look for a therapist. I may not know your full story yet, but I am here to get to know you and help you. If you are someone who feels sad more days than not, has lost pleasure in things you once enjoyed, worry or fearful about your present or future, struggle with relationships, or experienced sensitive events that you do not talk about with others, I am here to help. Also, if you are a parent and this information reflects your child, I specialize in working with them too!", Location.Manhattan, "https://drkhadijahcyril.com");
			Therapists therapists28 = new Therapists(28, "Kind Mind Psychology", "Psychologist, PsyD", "", "Are you stuck in unhealthy patterns? Easily overwhelmed by emotions? Stressed, pressed, and depressed? Do you want to get life moving in the right direction? Are you looking for providers who understand the challenges unique to your experiences as a BIPOC person or member of the LGBTQ+ community? We are here to help! The world can be a scary place, but with us by your side, we can can build a life that makes you happy to wake up each morning. We will create a safe, compassionate space for you to explore your concerns, fears, and shame while giving you the tools to propel yourself forward and build a new world for yourself!", Location.Manhattan, "https://www.kindmindpsych.com");
			Therapists therapists29 = new Therapists(29, "Steven P Welch", "Clinical Social Work/Therapist, LCSW-R, ACSW, CCTP", "", "Congratulations, you have found a compassionate and affirming therapist. I will work with you to assist in your understanding of the COVID, cultural, social and spiritual factors impacting your self image and sense of worth. I provide services to individuals, couples and families. I specialize in the following areas: depression, anxiety, LGBTQ issues, addictions, codependency (divorce/separation) and bereavement.", Location.Manhattan, "https://www.newyork-therapy.com");
			Therapists therapists30 = new Therapists(30, "Jean-Paul Dugue", "Clinical Social Work/Therapist, LCSW", "", "The mind is a powerful tool, incredibly powerful. We can think positive thoughts, we can think realistic thoughts and we can think negative thoughts. Some thoughts are fleeting and others forgotten. Some thoughts are rooted in our early impression of the world around us. We are committed to providing support with negative thought patterns and emotional dysregulation, providing individuals with the tools, knowledge, and the resources to overcome these challenges.", Location.Manhattan, "https://headway.co/providers/jean-paul-dugue");

		};

	}
}