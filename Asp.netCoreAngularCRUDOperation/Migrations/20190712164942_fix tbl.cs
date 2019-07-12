using Microsoft.EntityFrameworkCore.Migrations;

namespace Asp.netCoreAngularCRUDOperation.Migrations
{
    public partial class fixtbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CartOwnerName",
                table: "PaymentDetail",
                newName: "CardOwnerName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CardOwnerName",
                table: "PaymentDetail",
                newName: "CartOwnerName");
        }
    }
}
