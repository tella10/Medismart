using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Medismart.Migrations
{
    public partial class seeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Reservations",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1)");

            migrationBuilder.InsertData(
                table: "Reservations",
                columns: new[] { "Id", "Accomodation", "Alias", "CheckOut", "Checkin", "Comments", "Email", "EquipmentType", "FirstName", "GuestChild", "GuestMiddle", "GuestOld", "LastName", "Pet", "Phone", "RequiredService", "SlideOut" },
                values: new object[] { 1, "RV", "Mr", new DateTime(2021, 1, 22, 6, 49, 30, 740, DateTimeKind.Utc).AddTicks(5970), new DateTime(2021, 1, 22, 6, 49, 30, 740, DateTimeKind.Utc).AddTicks(5103), "This is comment", "Medismartsgmail.com", "Hydro", "Hambal", 1, 1, 1, "Tella", false, 123455, "water", false });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Reservations",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Reservations",
                type: "nvarchar(1)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
