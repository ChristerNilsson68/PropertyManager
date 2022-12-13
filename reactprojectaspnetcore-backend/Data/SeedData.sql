DECLARE @ROLEID UNIQUEIDENTIFIER
SET @ROLEID = NEWID()

DECLARE @STAMP UNIQUEIDENTIFIER
SET @STAMP = NEWID()

INSERT INTO AspNetRoles (Id,Name,NormalizedName,ConcurrencyStamp)
VALUES
(@ROLEID,'Administrator','ADMINISTRATOR',@STAMP)

DECLARE @USERID UNIQUEIDENTIFIER
SET @USERID = NEWID()

INSERT INTO AspNetUsers (Id, UserName, NormalizedUserName, Email, EmailConfirmed, PasswordHash, SecurityStamp, ConcurrencyStamp, AccessFailedCount, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled)
VALUES
(@USERID, 'admin@system.com','ADMIN@SYSTEM.COM', 'admin@system.com', 1, 'AQAAAAEAACcQAAAAEEW0NX+zTy21Wzi5RlizdXQbI9NWUC1gQHqGH261MsC9eU+qv7FgT3nfNcowndvFiw==', 'YLODIRA5LKZR4EGM6PINADOTWTADAG4Q', 'f7987377-52c5-4f9b-bce2-9557bd496f6c', 0, 0, 0, 0)

INSERT INTO AspNetUserRoles (UserId, RoleId)
VALUES
(@USERID, @ROLEID)


