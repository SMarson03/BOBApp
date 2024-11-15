package com.GreenUnderground.GreenU;

import com.GreenUnderground.GreenU.Common.Beverage;
import com.GreenUnderground.GreenU.Common.Location;
import com.GreenUnderground.GreenU.Gallery.Galleries;
import com.GreenUnderground.GreenU.Cafe.Cafes;
import com.GreenUnderground.GreenU.JuiceBar.JuiceBars;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.logging.Logger;

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
			Galleries galleries2 = new Galleries(2, "MoCADA", "80 Hanson Pl", "www.mocada.com", "Laurie Angela Cumbo", Location.Brooklyn, "www.mocoda.com");
			Galleries galleries3 = new Galleries(3, "Bedford Stuyvesant Museum of African Art", "1157 Bedford Ave", "www.bsma.com", "Eric Edwards", Location.Brooklyn, "www.bsma.com");
			Galleries galleries4 = new Galleries(4, "Bishop Gallery", "630 Flushing Ave.", "www.bishopgallery.com", "Erwin John & Stevenson Dunn Jr.", Location.Brooklyn, "www.bishopgallery.com");
			Galleries galleries5 = new Galleries(5, "The Studio Museum", "429 West 127th St.", "www.studiomuseum.com", "Charles Inniss", Location.Manhattan, "www.studiomuseum.com");
			Galleries galleries6 = new Galleries(6, "Nicola Vassell Gallery", "138 10th Avenue", "www.vassellgallery.com", "Nicola Vassell", Location.Brooklyn, "www.vassellgallery.com");
			Galleries galleries7 = new Galleries(7, "Heath Gallery", "24 W 120th St", "www.heathgallery.com", "Thomas Edwin & Saundra Alexis Heath", Location.Manhattan, "www.heathgallery.com");
			Galleries galleries8 = new Galleries(8, "Long Gallery", "2073 Adam Clayton Powell Jr Blvd", "www.longgallery.com", "Lewis Long", Location.Manhattan, "www.longgallery");
			Galleries galleries9 = new Galleries(9, "Hannah Traore Gallery", "150 Orchard Street", "www.hannahtraoregallery.com", "Hannah Traore", Location.Manhattan, "www.hannahtraoregallery");
			Galleries galleries10 = new Galleries(10, "Welancora Gallery", "33 Herkimer Street", "www.welancoragallery.com", "Ivy N. Jones", Location.Brooklyn, "www.welancoragallery.com");
			Galleries galleries11 = new Galleries(11, "Dorsey Art Gallery", "553 Rogers Ave.", "www.dorseyartgallery.com", "Lawrence P. Dorsey", Location.Brooklyn, "www.dorseyartgallery.com");
			Galleries galleries12 = new Galleries(12, "Ground Gallery", "80 Richards St.", "www.groundgallery.com", "Krista Scenna & Jill Benson", Location.Brooklyn, "www.groundgallery.com");
			Galleries galleries13 = new Galleries(13, "Medium Tings", "1134 President Street", "www.mediumtings.com", "Stephanie Baptist", Location.Brooklyn, "www.mediumtings.com");
			Galleries galleries14 = new Galleries(14, "Jenkins Johnson Gallery", "207 Ocean Ave.", "www.jenkinsjohnsongallery.com", "Karen Jenkins Johnson", Location.Brooklyn, "www.jenkinsjohnsongallery.com");
			Galleries galleries15 = new Galleries(15, "Housing Gallery", "191 Henry St.", "www.housinggallery.com", "KJ Freeman & Eileen Skyers", Location.Manhattan, "www.housinggallery.com");
			Galleries galleries16 = new Galleries(16, "Essie Green Gallery", "4213,419 Convent Ave. A", "www.essiegreengallery.com", "Essie Green & Sherman Edmiston", Location.Manhattan, "www.essiegreengallery.com");
			Galleries galleries17 = new Galleries(17, "Black Gotham Experience", "192 Front St.", "www.blackgotham.com", "Kamau Ware", Location.Manhattan, "www.blackgotham.com");
			Galleries galleries18 = new Galleries(18, "Cindy Rucker Gallery", "143 Orchard Street", "www.cindyruckergallery.com", "Cindy Rucker", Location.Manhattan, "www.cindyruckergallery.com");
			Galleries galleries19 = new Galleries(19, "Peg Alston Fine Arts", "407 Central Park W Apt. K", "www.pegalstonfinearts.com", "Peg Alston", Location.Manhattan, "www.pegalstonfinearts.com");
			Galleries galleries20 = new Galleries(20, "Skoto Gallery", "529 W20th St., #5FL", "www.skotogallery.com", "Skoto Aghahowa", Location.Brooklyn, "www.skotogallery.com");
			Galleries galleries21 = new Galleries(21, "Mackey Twins Art Gallery", "457 E. Sidney Ave.", "www.mackeytwinsartgallery.com", "Karen & Sharon Mackey", Location.Brooklyn, "www.mackeytwinsartgallery.com");
			Galleries galleries22 = new Galleries(22, "June Kelly Gallery", "166 Mercer St. #3C", "www.junekellygallery.com", "June Kelly", Location.Brooklyn, "www.junekellygallery.com");
			Galleries galleries23 = new Galleries(23, "The Compound", "185 Van Dyke St.", "www.compound7.series", "Free Richardson", Location.Manhattan, "www.compound7.series");
			Galleries galleries24 = new Galleries(24, "Cierra Britton Gallery", "220b Plymouth St.", "www.cierrabritton.com", "Cierra Britton", Location.Brooklyn, "www.cierrabritton.com");
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
			Cafes cafes4 = new Cafes(4, "Hibiscus Brew", "546 Flatbush Ave.", Location.Brooklyn, "www.hibiscusbrew.com", Beverage.Cafe, "www.hibiscusbrew.com");
			Cafes cafes5 = new Cafes(5, "Aunts Et Uncles", "1407 Nostrand Ave.", Location.Brooklyn, "www.auntsetuncles.com", Beverage.Cafe, "www.auntsetuncles.com");
			Cafes cafes6 = new Cafes(6, "Bklyn Blend", "194 Tompkins Ave.", Location.Brooklyn, "www.blklynblend.com", Beverage.Cafe, "www.blklynblend.com");
			Cafes cafes7 = new Cafes(7, "Bushwick Grind", "63 Whipple St.", Location.Brooklyn, "www.bushwickgrind.com", Beverage.Cafe, "www.bushwickgrind.com");
			Cafes cafes8 = new Cafes(8, "Brown Butter Craft Bar & Kitchen", "413 Thompkins Ave.", Location.Brooklyn, "www.brownbutternyc.com", Beverage.Cafe, "www.brownbutternyc.com");
			Cafes cafes9 = new Cafes(9, "St. Michel Cafe", "462 Irving Ave.", Location.Brooklyn, "www.michelcafe.com", Beverage.Cafe, "www.michelcafe.com");
			Cafes cafes10 = new Cafes(10, "Milk & Pull", "778 Seneca Ave.", Location.Brooklyn, "www.milkandpull.com", Beverage.Cafe, "www.milkandpull.com");
			Cafes cafes11 = new Cafes(11, "Lakou cafe", "195 Utica Ave.", Location.Brooklyn, "www.lakoucafe.com", Beverage.Cafe, "www.lakoucafe.com");
			Cafes cafes12 = new Cafes(12, "Sweet Sundays Cafe", "2916 Beverley Rd.", Location.Brooklyn, "www.sweetsunday.com", Beverage.Cafe, "www.sweetsunday.com");
			Cafes cafes13 = new Cafes(13, "Boogie Down Grind", "88 Hunts Point", Location.Bronx, "www.boogiedowngrind.com", Beverage.Cafe, "www.che.com");
			Cafes cafes14 = new Cafes(14, "Ginjan Cafe", "85 E 125th St.", Location.Manhattan, "www.ilikeitblack", Beverage.Cafe, "www.ilikeitblack");
			Cafes cafes15 = new Cafes(15, "The Oma, Shop", "1707 Amsterdam Ave.", Location.Manhattan, "www.buunicafe.com", Beverage.Cafe, "www.buunicafe.com");
			Cafes cafes16 = new Cafes(16, "LoveLane BK", "674 Nostrand Ave.", Location.Brooklyn, "www.hibiscusbrew.com", Beverage.Cafe, "www.hibiscusbrew.com");
			Cafes cafes17 = new Cafes(17, "Coffee Uplifts People", "329 Gates Ave.", Location.Brooklyn, "www.auntsetuncles.com", Beverage.Cafe, "www.auntsetuncles.com");
			Cafes cafes18 = new Cafes(18, "Chez Alex", "72 Ralph Ave.", Location.Brooklyn, "www.blklynblend.com", Beverage.Cafe, "www.blklynblend.com");
			Cafes cafes19 = new Cafes(19, "Zaca Cafe", "429 Marcus Garvey Blvd.", Location.Brooklyn, "www.bushwickgrind.com", Beverage.Cafe, "www.bushwickgrind.com");
			Cafes cafes20 = new Cafes(20, "Greenhouse Cafe @ Seed Brklyn", "1217 Bedford Ave.", Location.Brooklyn, "www.brownbutternyc.com", Beverage.Cafe, "www.brownbutternyc.com");
			Cafes cafes21 = new Cafes(21, "Brooklyn Perk", "605 Flatbush Ave.", Location.Brooklyn, "www.michelcafe.com", Beverage.Cafe, "www.michelcafe.com");
			Cafes cafes22 = new Cafes(22, "NBHD Brulee", "2620 Frederick Douglass Blvd.", Location.Manhattan, "www.milkandpull.com", Beverage.Cafe, "www.milkandpull.com");
			Cafes cafes23 = new Cafes(23, "Nurish", "637A Vanderbilt Ave.", Location.Brooklyn, "www.lakoucafe.com", Beverage.Cafe, "www.lakoucafe.com");
			Cafes cafes24 = new Cafes(24, "Deja Brew Cafe", "102- 10 Jamaica Ave.", Location.Queens, "www.sweetsunday.com", Beverage.Cafe, "www.sweetsunday.com");
			Cafes cafes25 = new Cafes(25, "Lips Cafe", "1412 Nostrand Ave.", Location.Brooklyn, "www.che.com", Beverage.Cafe, "www.che.com");
			Cafes cafes26 = new Cafes(26, "September", "83 Saratoga Ave.", Location.Brooklyn, "www.ilikeitblack", Beverage.Cafe, "www.ilikeitblack");
			Cafes cafes27 = new Cafes(27, "Cups and Books", "2024 Bedford Ave.", Location.Brooklyn, "www.buunicafe.com", Beverage.Cafe, "www.buunicafe.com");
			Cafes cafes28 = new Cafes(28, "Miss Barbs", "1038 Nostrand Ave.", Location.Brooklyn, "www.hibiscusbrew.com", Beverage.Cafe, "www.hibiscusbrew.com");
			Cafes cafes29 = new Cafes(29, "Brooklyn Tea", "411 Lewis Ave.", Location.Brooklyn, "www.auntsetuncles.com", Beverage.Cafe, "www.auntsetuncles.com");
			Cafes cafes30 = new Cafes(30, "Cafe Lakay", "3323 Avenue I", Location.Brooklyn, "www.blklynblend.com", Beverage.Cafe, "www.blklynblend.com");

			List<Cafes> cafes = List.of(cafes1, cafes2, cafes3, cafes4, cafes5, cafes6, cafes7,
					cafes8, cafes9, cafes10, cafes11, cafes12, cafes13, cafes14, cafes15, cafes16,
					cafes17, cafes18, cafes19, cafes20, cafes21, cafes22, cafes23, cafes24, cafes25,
					cafes26, cafes27, cafes28, cafes29, cafes30);

			JuiceBars juiceBars1 = new JuiceBars(1, "Bkln Blend", "194 Tompkins Ave", Location.Brooklyn, "www.blklynblend.com", Beverage.Juice_Bar, "www.blklynblend.com");
			JuiceBars juiceBars2 = new JuiceBars(2, "The Juice Gallery", "1647 Bedford Ave.", Location.Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars3 = new JuiceBars(3, "Passa Passa", "401 Rogers Ave.", Location.Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars4 = new JuiceBars(4, "Unks Place", "1962 Madison Ave.", Location.Manhattan, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars5 = new JuiceBars(5, "Juice Worx", "90 St. Nicholas", Location.Manhattan, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars6 = new JuiceBars(6, "Cocoa Bean Juice & Salad Bar", "1510 Nostrand Ave.", Location.Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars7 = new JuiceBars(7, "Canarsie Blend Juice Bar", "9202 Avenue M", Location.Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars8 = new JuiceBars(8, "Mad Juicy", "100 W 139th St.", Location.Manhattan, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars9 = new JuiceBars(9, "Juice Joint", "144-14 ROckaway Blvd.", Location.Queens, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars10 = new JuiceBars(10, "Les Deux Nutrition Juice", "662 Blake Ave.", Location.Brooklyn, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars11 = new JuiceBars(11, "Uptown Juice Bar", "2524 Adam Clayton Powell Jr. Blvd.", Location.Manhattan, "", Beverage.Juice_Bar, "");
			JuiceBars juiceBars12 = new JuiceBars(12, "Green Garden Health Food", "3543 White Plains Rd.", Location.Bronx, "", Beverage.Juice_Bar, "");

		};

	}
}