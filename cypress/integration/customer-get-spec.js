describe("My First Test", () => {
  it("Returns the initial data", () => {
    cy.request("/customer").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.equal(
        JSON.parse(`[
        {
          "id": 1,
          "name": "Our first customer",
          "email": "first-customer@bonhams.com"
        },
        {
          "id": 2,
          "name": "Our second customer",
          "email": "second-customer@bonhams.com"
        }
      ]`)
      );
    });
  });

  it("Returns the first result", () => {
    cy.request("/customer/1").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.equal(
        JSON.parse(`
        {
          "id": 1,
          "name": "Our first customer",
          "email": "first-customer@bonhams.com"
        }
      `)
      );
    });
  });

  it("Returns the second result", () => {
    cy.request("/customer/2").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.equal(
        JSON.parse(`
        {
          "id": 2,
          "name": "Our second customer",
          "email": "second-customer@bonhams.com"
        }
      `)
      );
    });
  });
});
