<?php
/**
 * Tests for the km_rpbt_query_related_posts() function in functions.php.
 */
class KM_RPBT_Functions_Tests extends KM_RPBT_UnitTestCase {

	/**
	 * Test if km_rpbt_plugin() returns an object.
	 *
	 * Used in the km_rpbt_query_related_posts() function to replace 'post_type = 'post' with 'post_type IN ( ... )
	 */
	function test_km_rpbt_plugin() {
		$plugin = km_rpbt_plugin();
		$this->assertTrue( $plugin instanceof Related_Posts_By_Taxonomy_Defaults );
	}

	/**
	 * Test validating post types.
	 */
	function test_km_rpbt_get_post_types() {
		$post_types = 'post ,lol, post';
		$this->assertEquals( array( 'post' ), km_rpbt_get_post_types( $post_types ) );
	}

	/**
	 * Test validating custom post types.
	 */
	function test_km_rpbt_get_post_types_custom() {
		register_post_type( 'cpt' );
		$expected = array( 'cpt', 'post' );
		$post_types = km_rpbt_get_post_types( $expected );
		sort( $post_types );
		$this->assertEquals( $expected, km_rpbt_get_post_types( $post_types ) );
	}

	/**
	 * Test validating taxonomies.
	 */
	function test_km_rpbt_get_taxonomies() {
		$taxonomies = 'category ,lol, category';
		$this->assertEquals( array( 'category' ), km_rpbt_get_taxonomies( $taxonomies ) );
	}

	/**
	 * Test validating custom taxonomies.
	 */
	function test_km_rpbt_get_taxonomies_custom() {
		register_taxonomy( 'ctax', 'post' );
		$expected = array( 'category', 'ctax' );
		$taxonomies = km_rpbt_get_taxonomies( $expected );
		sort( $taxonomies );
		$this->assertEquals( $expected, $taxonomies );
	}

	/**
	 * Test values separated by.
	 */
	function test_km_rpbt_get_comma_separated_values() {
		$expected = array( 'lol', 'hihi' );
		$value = ' lol, hihi,lol';
		$this->assertEquals( $expected, km_rpbt_get_comma_separated_values( $value ) );

		$value = array( ' lol', 'hihi ', ' lol ' );
		$this->assertEquals( $expected, km_rpbt_get_comma_separated_values( $value ) );
	}

	/**
	 * Test if array with validated ids are returned.
	 */
	function test_km_rpbt_validate_ids() {

		$ids = array( 1, false, 'string', 2, 0, 1, 3 );

		$validated_ids = km_rpbt_validate_ids( $ids );
		$this->assertEquals( array( 1, 2, 3 ), $validated_ids );

		$ids = '1,string,2,0,###,2,3';
		$validated_ids = km_rpbt_validate_ids( $ids );
		$this->assertEquals( array( 1, 2, 3 ), $validated_ids );
	}
}
