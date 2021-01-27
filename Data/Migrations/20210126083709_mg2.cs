using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Medismart.Migrations
{
    public partial class mg2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Reservations",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CheckOut", "Checkin", "RequiredService" },
                values: new object[] { new DateTime(2021, 1, 26, 9, 37, 7, 503, DateTimeKind.Local).AddTicks(1407), new DateTime(2021, 1, 26, 9, 37, 7, 501, DateTimeKind.Local).AddTicks(1084), "Water" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Reservations",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CheckOut", "Checkin", "RequiredService" },
                values: new object[] { new DateTime(2021, 1, 26, 9, 28, 32, 187, DateTimeKind.Local).AddTicks(7743), new DateTime(2021, 1, 26, 9, 28, 32, 185, DateTimeKind.Local).AddTicks(6726), "water" });
        }
    }
}
