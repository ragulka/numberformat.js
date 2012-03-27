describe( "NumberFormat", function () {

  describe( "Public API", function () {

    it("should exist", function () {
      expect( NumberFormat ).to.be.a('function');
    });

    it("should have static helper functions/objects", function () {
      expect( NumberFormat.locale ).to.be.an( 'object' );
    });

    it("should be a constructor", function () {
      var nf = new NumberFormat( 'en' );
      expect( nf ).to.be.a( NumberFormat );
    });

    it("should bail on non-existing locales", function () {
      expect(function(){ var a = new NumberFormat( 'lawlz' ); }).to.throwError();
    });

    it("should default to 'en' when no locale is passed into the constructor", function () {
      expect((new NumberFormat()).locale).to.be( 'en' );
    });

  });
  
  describe( "Currency", function () {

    it("should handle positive and negative currency", function () {
      var nf = new NumberFormat('en', '\u00a4#,##0.00;-\u00a4#,##0.00');
      expect(
        nf.format(1234.56)
      ).to.eql('$1,234.56');
      expect(
        nf.format(-1234.56)
      ).to.eql('-$1,234.56');
    });

  });
  
  describe( "Decimals", function () {

    it("should handle French decimals", function () {
      var nf = new NumberFormat('fr');
      expect(
        nf.parse('0,30')
      ).to.eql(0.30);
      expect(
        nf.parse('123 456,99')
      ).to.eql(123456.99);
    });

  });

});