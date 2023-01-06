USE Property

DECLARE @ROLEID UNIQUEIDENTIFIER
SET @ROLEID = NEWID()

DECLARE @STAMP UNIQUEIDENTIFIER
SET @STAMP = NEWID()

INSERT INTO AspNetRoles (Id,Name,NormalizedName,ConcurrencyStamp) VALUES
(@ROLEID,'Administrator','ADMINISTRATOR',@STAMP)

SET @ROLEID = NEWID()
SET @STAMP = NEWID()
INSERT INTO AspNetRoles (Id,Name,NormalizedName,ConcurrencyStamp) VALUES
(@ROLEID,'Employee','EMPLOYEE',@STAMP)

SET @ROLEID = NEWID()
SET @STAMP = NEWID()
INSERT INTO AspNetRoles (Id,Name,NormalizedName,ConcurrencyStamp) VALUES
(@ROLEID,'ServiceTekniker','SERVICETEKNIKER',@STAMP)

SET @ROLEID = NEWID()
SET @STAMP = NEWID()
INSERT INTO AspNetRoles (Id,Name,NormalizedName,ConcurrencyStamp) VALUES
(@ROLEID,'HyresAdmin','HYRESADMIN',@STAMP)


DECLARE @USERID UNIQUEIDENTIFIER
SET @USERID = NEWID()

INSERT INTO AspNetUsers (Id, UserName, NormalizedUserName, Email, EmailConfirmed, PasswordHash, SecurityStamp, ConcurrencyStamp, AccessFailedCount, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled)
VALUES
(@USERID, 'admin@system.com','ADMIN@SYSTEM.COM', 'admin@system.com', 1, 'AQAAAAEAACcQAAAAEEW0NX+zTy21Wzi5RlizdXQbI9NWUC1gQHqGH261MsC9eU+qv7FgT3nfNcowndvFiw==', 'YLODIRA5LKZR4EGM6PINADOTWTADAG4Q', 'f7987377-52c5-4f9b-bce2-9557bd496f6c', 0, 0, 0, 0)

INSERT INTO AspNetUserRoles (UserId, RoleId)
VALUES
(@USERID, @ROLEID)


INSERT INTO City
VALUES
('Helsingborg'),
('Landskrona'),
('Lund'),
('Malmö')

INSERT INTO Property
VALUES
('Södergatan 1', 1),
('Storgatan 2', 1),
('Östergatan 1', 1),
('Storgatan 8', 2),
('Västergatan 12', 2),
('Östergatan 18', 2),
('Södergatan 1', 3),
('Södergatan 3', 3),
('Västergatan 19', 4),
('Västergatan 27', 4)

INSERT INTO Apartment
VALUES
('1001', 1, 3, 80, 1),
('1002', 1, 2, 56, 1),
('1003', 2, 3, 80, 1),
('1004', 2, 3, 56, 1),
('1101', 1, 1, 35, 2),
('1102', 1, 2, 56, 2),
('1103', 1, 3, 84, 2),
('1201', 1, 3, 90, 3),
('1202', 2, 3, 90, 3),
('1202', 3, 3, 90, 3),
('1202', 4, 3, 90, 3),
('1301', 1, 4, 120, 4),
('1302', 2, 4, 120, 4),
('1303', 3, 4, 120, 4),
('1001', 1, 1, 28, 5),
('1002', 1, 1, 28, 5),
('1003', 1, 1, 28, 5),
('1001', 1, 3, 80, 6),
('1002', 1, 2, 56, 6),
('1003', 2, 3, 80, 6),
('1004', 2, 3, 56, 6),
('1101', 1, 1, 35, 7),
('1102', 1, 2, 56, 7),
('1103', 1, 3, 84, 7),
('1201', 1, 3, 90, 8),
('1202', 2, 3, 90, 8),
('1202', 3, 3, 90, 8),
('1202', 4, 3, 90, 8),
('1301', 1, 4, 120, 9),
('1302', 2, 4, 120, 9),
('1303', 3, 4, 120, 9),
('1001', 1, 1, 28, 10),
('1002', 1, 1, 28, 10),
('1003', 1, 1, 28, 10)


