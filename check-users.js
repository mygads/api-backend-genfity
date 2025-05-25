const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function checkUsers() {
  try {
    console.log('Checking existing users...');
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
      take: 10
    });
    
    console.log('Found users:', users);
    
    if (users.length === 0) {
      console.log('\nNo users found. Creating a system user...');
      const systemUser = await prisma.user.create({
        data: {
          id: 'system',
          email: 'system@genfity.com',
          name: 'System User',
          role: 'system' // Using system role
        }
      });
      console.log('Created system user:', systemUser);
    } else {
      console.log(`\nFound ${users.length} existing users. We can use the first user ID: ${users[0].id}`);
      
      // Check if 'system' user exists
      const systemUser = users.find(u => u.id === 'system' || u.role === 'system');
      if (systemUser) {
        console.log('System user already exists:', systemUser.id);
      } else {
        console.log('No system user found. We can either:');
        console.log('1. Use existing user ID:', users[0].id);
        console.log('2. Create a system user');
        
        // Try to create system user
        try {
          const newSystemUser = await prisma.user.create({
            data: {
              id: 'system',
              email: 'system@genfity.com', 
              name: 'System User',
              role: 'system'
            }
          });
          console.log('Created new system user:', newSystemUser);
        } catch (createError) {
          console.log('Could not create system user (probably ID conflict):', createError.message);
          console.log('Will use existing user:', users[0].id);
        }
      }
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    console.error('Full error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkUsers();
